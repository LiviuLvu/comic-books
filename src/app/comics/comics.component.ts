import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, transition, animate, style, query, animateChild, stagger } from '@angular/animations';

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
  animations: [
    trigger('container', [
      state('tall', style({
        height: '*',
      })),
      transition('void <=> *', animate(150)),
    ]),

    trigger('enterTrigger', [
      // state('fadeIn', style({
      //   transform: 'translateX(0)',
      //   color: 'red'
      // })),
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('100ms ease-in', style({ transform: 'translateX(-100%)' })),
      ])
    ]),
  ],
  providers: [ComicsService]
})
export class ComicsComponent implements OnInit {
  items: Observable<string[]>;
  hideLiIndex: string = 'show';
  // animation variables
  switch_exp: string;
  triggerState: string;

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
  // aimation functions
  stateChange = (i) => {
    this.switch_exp = i;
    window.document.body.classList.toggle('no-scroll');
  }
  fadeContent = (i) => {
    this.triggerState = i;
  }
  hideDetail = () => {
    this.switch_exp = 'x';
    window.document.body.classList.toggle('no-scroll');
  }
}
