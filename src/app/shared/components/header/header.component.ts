import { Component, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreatePostModalComponent } from '../create-post-modal/create-post-modal.component';

@Component({
  selector: 'ib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() showNavBar = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  public toggleMenu(): void {
    this.showNavBar.emit();
  }
  
  public openDialog() {
    const dialogRef = this.dialog.open(CreatePostModalComponent);
  }

  
}
