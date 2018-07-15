import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/scenes.json';
  getUsers(){
      return this.http.get(this.configUrl);
  }

  getSleep(){
    return this.http.get(this.configUrl);
  }

  getMeditate(){
    return this.http.get(this.configUrl);
  }

  getMusic(){
    return this.http.get(this.configUrl);
  }

  getMaster(){
    return this.http.get(this.configUrl);
  }

}
