import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private baseUrl ='https://newsapi.org/v2/everything?q=bitcoin'
    private baseUrl2 ='https://newsapi.org/v2/top-headlines?'
  private apiKey = '28a5e1d3e58849f6a99c808e9e19daed'
  constructor(private http:HttpClient) { }


  getAllNewsItems1():Observable<any>{
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=28a5e1d3e58849f6a99c808e9e19daed$page=`{}`&pageSize=`{}`')
  }


  getAllNewsItems(page: number, pageSize: number,category : any):Observable<any>{
    // return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=28a5e1d3e58849f6a99c808e9e19daed$page=`{}`&pageSize=`{}`')
    return this.http.get(`${this.baseUrl2}category=${category}&apiKey=${this.apiKey}&page=${page}&pageSize=${pageSize}`)
  }
}
