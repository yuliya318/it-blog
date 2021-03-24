import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'ib-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post: Post;

  constructor() { }

}
