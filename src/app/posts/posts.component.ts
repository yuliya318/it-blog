import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../shared/models/post.interface';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'ib-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Array<Post>;
  private topic: string;
  private getPostsSubscribtion: Subscription;
  private postsChangesSubscribtion: Subscription;
  private routerSubscribtion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    if (this.getPostsSubscribtion) {
      this.getPostsSubscribtion.unsubscribe();
    }
    this.postsChangesSubscribtion.unsubscribe();
    this.routerSubscribtion.unsubscribe();
  }

  private initializeValues(): void {
    this.routerSubscribtion = this.route.paramMap.subscribe((params) => {
      this.topic = params.get('topic');
      this.getPostsForView();
    });
  }

  private initializeListeners(): void {
    this.postsChangesSubscribtion = this.postsService.postsChanges.subscribe(
      () => this.getPostsFromLocal()
    );
  }

  private getPostsForView(): void {
    localStorage.length ? this.getPostsFromLocal() : this.getPostsFromDB();
  }

  private getPostsFromDB(): void {
    this.getPostsSubscribtion = this.postsService
      .getPosts()
      .subscribe((posts) => {
        this.posts = posts;
        this.filterPosts();
        this.postsService.setPostsToLocal(posts);
      });
  }

  private getPostsFromLocal(): void {
    this.posts = this.postsService.getPostsFromLocal();
    this.filterPosts();
  }

  private filterPosts(): void {
    if (this.topic) {
      this.posts = this.posts.filter((post) => post.topic === this.topic);
    }
  }
}
