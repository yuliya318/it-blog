import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';

const routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: ':topic',
    component: PostsComponent,
  },
  {
    path: ':topic/:postID',
    component: PostPageComponent,
  },
];

@NgModule({
  declarations: [PostsComponent, PostCardComponent, PostPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [PostsComponent]
})
export class PostsModule { }
