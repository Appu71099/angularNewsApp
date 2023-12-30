import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }


  getAllNewsItems(pageNumber:any, pageSize:any):Observable<any>{
    console.log("pageNumber", pageNumber);
    console.log("pageSize",pageSize);
    // return this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=28a5e1d3e58849f6a99c808e9e19daed&page=+'{pageNumber}'+&pageSize=+'{pageSize}'`);
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=28a5e1d3e58849f6a99c808e9e19daed&page=${pageNumber}&pageSize=${pageSize}');
  }
}
