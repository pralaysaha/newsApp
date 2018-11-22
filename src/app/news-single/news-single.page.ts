import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  article: any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    console.log(this.newsService.currentArticle);
    if (this.newsService.currentArticle) {
      this.article = this.newsService.currentArticle;
      console.log(this.article);
    }
    else {
      this.returnToHome();
    }
  }

  returnToHome() {
    this.router.navigate(['/tabs']);
  }

}
