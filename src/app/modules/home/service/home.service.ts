import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectHome } from '../interface/projects-home.interface';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<ProjectHome[]> {
    return this.http.get<ProjectHome[]>('/assets/mocks/home.json');
  }
}
