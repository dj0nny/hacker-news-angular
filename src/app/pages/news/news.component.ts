import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { News } from '../../models';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe(news => {
      this.news = news;
    });
  }
}
