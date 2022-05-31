import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  host = 'https://imsi.pl:5000/player/course_user';
  post_url = 'https://imsi.pl:5000/players/2217';
  constructor(private http: HttpClient) {
  }

  getRequest(): Observable<any> {
    return this.http.get<any>(this.host);
  }

  putRequest(request : Request) : void {
    const body = {
      p0: request.p0,
      p1: request.p1,
      p2: request.p2
    };
    this.http.put<void>(this.post_url, body).subscribe();
  }
}
