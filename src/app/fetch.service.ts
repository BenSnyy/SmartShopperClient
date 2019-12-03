import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { IUsers } from '../app/users';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private _url: string = "http://localhost:3000/user/login";

  constructor(private http: HttpClient) { }

  public getUser(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url);
  }

}
