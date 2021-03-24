import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/shared/models/post.interface';

@Injectable()
export class PostsService {

  public postsChanges = new Subject();

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Array<Post>> {
    const fullUrl = `${environment.apiUrl}posts`;
    return this.http.get(fullUrl).pipe((response: any) => response);
  }

  public createPost(post: Post): Observable<any> {
    const fullUrl = `${environment.apiUrl}posts`;
    return this.http.post(fullUrl, post).pipe((response:any) => response);
  }

  public setPostsToLocal(posts: Array<Post>): void {
    localStorage.setItem('posts', JSON.stringify(posts));
  }

  public updatePostsInLocal(post: Post): void {
    const postsArr = this.getPostsFromLocal();
    postsArr.unshift(post);
    this.setPostsToLocal(postsArr);
    this.postsChanges.next();
  }

  public getPostsFromLocal(): Array<Post> {
    return JSON.parse(localStorage.getItem('posts'));
  }

  public getPostFromLocal(id: number): Post {
    const postArray = JSON.parse(localStorage.getItem('posts')).filter((post) => post.id === id);
    return postArray[0];
  }
}