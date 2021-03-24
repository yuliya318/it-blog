import { Injectable } from '@angular/core';

@Injectable()
export class TopicsService {
  public topicsArray = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'React',
    'Vue',
  ];

  constructor() {}
}
