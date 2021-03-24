import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TopicsService } from 'src/app/shared/services/topics.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ib-create-post-modal',
  templateUrl: './create-post-modal.component.html',
  styleUrls: ['./create-post-modal.component.scss'],
})
export class CreatePostModalComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public topics: Array<string>;
  // get formControls(): any {
  //   return this.form.controls;
  // }
  private createPostSubscribtion: Subscription;

  constructor(
    private fb: FormBuilder,
    private topicsService: TopicsService,
    private dialogRef: MatDialogRef<CreatePostModalComponent>,
    private postsService: PostsService
  ) {}

  public submitPostForm(): void {
    this.createPostSubscribtion = this.postsService
      .createPost(this.form.value)
      .subscribe((post) => {
        this.postsService.updatePostsInLocal(post);
      });
  }

  public onCloseDialog() {
    this.dialogRef.close();
  }

  // public uploadFile(event): void {
  //   if (event.target.files.length) {
  //     const [file] = event.target.files;
  //     this.formControls.image.patchValue(file);
  //   } 
  // }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  ngOnDestroy(): void {
    if (this.createPostSubscribtion) {
      this.createPostSubscribtion.unsubscribe();
    }
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      topic: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      body: [null, [Validators.required]],
      image: [null, [Validators.required]],
    });
  }

  private initializeValues(): void {
    this.topics = this.topicsService.topicsArray;
  }

}
