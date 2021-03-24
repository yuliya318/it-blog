import { Component, OnInit } from '@angular/core';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'ib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public topics: Array<string>;

  constructor(private topicsService: TopicsService) { }

  ngOnInit(): void {
    this.topics = this.topicsService.topicsArray;
  }

}
