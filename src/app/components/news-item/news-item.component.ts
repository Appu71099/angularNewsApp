import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit{

  ngOnInit(): void {
    // console.log(this.article)
    this.title = this.article.title.slice(0,24);

    
    this.image = this.article.urlToImage
    this.description = this.article.content.slice(0,88);

    

    this.newsUrl = this.article.url
    console.log(this.title);
  }


  @Input () article:any


  

  
  title:any;
  image:any;
  description:any;
  newsUrl:any;
 

}
