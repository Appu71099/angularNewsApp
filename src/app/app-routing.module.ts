import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: NewsComponent, data: { category: 'general' } }, // Default route
  { path: 'business', component: NewsComponent, data: { category: 'business' } },
  { path: 'entertainment', component: NewsComponent, data: { category: 'entertainment' } },
  { path: 'general', component: NewsComponent, data: { category: 'general' } },
  { path: 'health', component: NewsComponent, data: { category: 'health' } },
  { path: 'science', component: NewsComponent, data: { category: 'science' } },
  { path: 'sports', component: NewsComponent, data: { category: 'sports' } },
  { path: 'technology', component: NewsComponent, data: { category: 'technology' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


