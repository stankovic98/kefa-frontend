import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Common} from '../../common';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${Common.apiUrl}/admin/edit-info`).toPromise()
  }

  saveInfo(info: any) {
    return this.http.post(`${Common.apiUrl}/admin/edit-info`, {info}).toPromise().then(data => {
      console.log(data)
    })
  }
}
