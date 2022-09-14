import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfilerService {

  constructor(private toastrService: ToastrService) { }

  add(log: string) {
    console.log(log);
    this.toastrService.info(log);
  }
}
