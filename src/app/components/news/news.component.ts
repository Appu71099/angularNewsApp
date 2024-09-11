import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { NewsServiceService } from 'src/app/Service/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{


  constructor(private service:NewsServiceService,private ngxLoader: NgxUiLoaderService,private route: ActivatedRoute){}

  category:any

  ngOnInit(){
    this.route.data.subscribe(data=>{
      this.category = data['category']
      console.log('CATEGORY:',this.category)
    })

    this.getAllItems();
  }


  

  itemDropdown = [10,20,30,40,50,60]

  countery: any = [
    {
      "id": 1,
      "name": "India",
      "code": "in"
    },
    {
      "id": 2,
      "name": "United States",
      "code": "us"
    },
    {
      "id": 3,
      "name": "China",
      "code": "cn"
    },
    {
      "id": 4,
      "name": "Japan",
      "code": "jp"
    },
    {
      "id": 5,
      "name": "Germany",
      "code": "de"
    },
    {
      "id": 6,
      "name": "United Kingdom",
      "code": "gb"
    },
    {
      "id": 7,
      "name": "France",
      "code": "fr"
    },
    {
      "id": 8,
      "name": "Brazil",
      "code": "br"
    },
    {
      "id": 9,
      "name": "Russia",
      "code": "ru"
    },
    {
      "id": 10,
      "name": "Canada",
      "code": "ca"
    }
    
  ]

  // counteryCode:any="";
  // category: string = 'sports'

  clickButton(){
    alert("data: " + this.category)  
  }
 
  page: number = 1;
  pageSize: number =9
  articles:any[]=[]

  
  lastPage!: number;
getAllItems(){
  this.ngxLoader.start()
  console.log("********************************")
  console.log(this.category)
  console.log("********************************")
  this.service.getAllNewsItems(this.page,this.pageSize,this.category).subscribe((res:any)=>{
    this.articles = res.articles;
    // this.totalArticles = res.totalResults;
    console.log(res.articles);
    this.ngxLoader.stop();
    this.lastPage = res.totalResults/this.pageSize;
  })
}


getPreviousData(){
 this.page -=1;
 this.getAllItems();
}

getNextData(){
  this.page +=1;
  this.getAllItems();
}

}
