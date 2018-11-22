import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business').subscribe(x => {
      this.articles = x;
    });
  }

  navigateToDetails(article: any) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
