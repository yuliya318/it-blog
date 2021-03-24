import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/models/post.interface';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'ib-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
  public post: Post;
  public topic: string;
  private postId: number;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.initializeValues();
    this.getPost();    
  }

  private initializeValues(): void {
    this.postId = +this.route.snapshot.paramMap.get('postID');
    this.topic = this.route.snapshot.paramMap.get('topic');
  }

  private getPost(): void {
    this.post = this.postsService.getPostFromLocal(this.postId);
  }
}
