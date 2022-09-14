import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { paths } from '@interceptors-examples/interface/const';

@Injectable()
export class ApisCallService {

  constructor(private http: HttpClient) {}

  runCache(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/2';
    return this.http.get(url);
  }

  runConvert(requestObj: Object): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/comments/1';
    return this.http.put(url, requestObj);
  }

  runError(): Observable<any> {
    return this.http.get(paths.error);
  }

  runFake(): Observable<any> {
    return this.http.get(paths.fake);
  }

  runHeader(): Observable<any> {
    return this.http.get(paths.header);
  }

  runHttps(): Observable<any> {
    const url = 'http://jsonplaceholder.typicode.com/todos/1';
    return this.http.get(url);
  }

  runLoader(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/albums/1';
    return this.http.get(url);
  }

  runNotify(): Observable<any> {
    const body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(url, body);
  }

  runSucceed(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    return this.http.get(url);
  }

  runFailed(): Observable<any> {
    return this.http.get(paths.profiler);
  }
}
