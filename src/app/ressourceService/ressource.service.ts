import { Injectable } from '@angular/core';
import {Http, RequestOptions, RequestOptionsArgs,Headers} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RessourceService {

  constructor(private http:Http){

  }

  public getTickets(access_token:string){
    var headers = new Headers({
      "Authorization": "bearer " + access_token
    });

    var response

    return this.http
      .get('http://arachid.me:7777/api/vente/user/tickets', { headers: headers })
      .map(response => response.json())
  }

}
