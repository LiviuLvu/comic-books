import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Subject } from 'rxjs/Subject';

import { Hero } from './hero';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'my-comics',
  templateUrl: './comics.component.html',
  providers: [ComicsService]
})
export class ComicsComponent implements OnInit {
  items: Observable<string[]>;
  
  constructor(private comicsService: ComicsService) { }

  private searchTermStream = new Subject<string>();

  search(term: string) { this.searchTermStream.next(term);
  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.comicsService.search(term));
  }
}
