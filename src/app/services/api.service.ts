import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { News } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL: string = 'https://api.hackernews.io';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.BASE_URL + '/news');
  }
}
