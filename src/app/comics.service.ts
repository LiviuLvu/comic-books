import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ComicsService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    let wikiUrl = 'https://gateway.marvel.com:443/v1/public/comics';

    let params = new URLSearchParams();
    params.set('titleStartsWith', term);
    params.set('ts', '1497813263166');
    params.set('apikey', '2db63c4eb012accb67daa5284fb68156');
    params.set('hash', '9c4ef371d679cba7f8703210a3294644');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling

    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]> response.json().data.results)
        // console.log(response.json().data.results);
  }
}
