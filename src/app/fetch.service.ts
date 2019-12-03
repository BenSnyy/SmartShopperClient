import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient) { }

  public getUser() {
    return this.httpClient.get(`http://user/create`)
  }

}
