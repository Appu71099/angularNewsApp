import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from 'src/app/Service/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{


  constructor(private service:NewsServiceService){

  }
  ngOnInit(){
    this.getAllItems();
  }

  articles:any[]=[]
  pageNumber:any = 2;
  pageSize:any =3;


getAllItems(){
  this.service.getAllNewsItems(this.pageNumber,this.pageSize).subscribe((res:any)=>{
    this.articles = res.articles;

    // console.log("pageNumber", pageNumber);
    // console.log("pageSize",pageSize);
    // console.log(res.articles);
  })
}

}
