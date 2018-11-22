import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URI = environment.API_URL;
const API_Key = environment.API_Key;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(`${API_URI}/${url}&apiKey=${API_Key}`);
  }
}
