import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { Newest } from '../../models';
@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  newest: Newest[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNewest().subscribe(newest => {
      this.newest = newest;
    });
  }

}
