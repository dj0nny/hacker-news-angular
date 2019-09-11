import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './pages/news/news.component';
import { NewestComponent } from './pages/newest/newest.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  {
    path: 'newest',
    component: NewestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
