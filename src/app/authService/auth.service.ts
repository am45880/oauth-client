import { Injectable } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs,Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  public authenticate(username:string,password:string){
    var body = `username=${username}&password=${password}&grant_type=password`;
    var headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa('mobile:pass0')
    });

    var response

    return this.http
      .post('http://arachid.me:9999/oauth/token', body, { headers: headers })
      .map(response => response.json())


  }

}
