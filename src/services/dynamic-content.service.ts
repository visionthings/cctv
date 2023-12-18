import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DynamicContentService {
  constructor(private http: HttpClient) {}

  fetchNavlinks() {
    return this.http.get('https://api.vision-things.com/api/nav-elements');
  }

  fetchPages() {
    return this.http.get('https://api.vision-things.com/api/pages');
  }
}
