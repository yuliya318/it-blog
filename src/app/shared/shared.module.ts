import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material.module';
import { CreatePostModalComponent } from './components/create-post-modal/create-post-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TopicsService } from './services/topics.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsService } from './services/posts.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, CreatePostModalComponent, NavbarComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [HeaderComponent, NavbarComponent],
  entryComponents: [CreatePostModalComponent],
  providers: [TopicsService, PostsService]
})
export class SharedModule {}
