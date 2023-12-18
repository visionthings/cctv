import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}
  sendMessage(data: any) {
    return this.http.post<{}>(
      'https://api.vision-things.com/api/contact-messages',
      data
    );
  }
}
