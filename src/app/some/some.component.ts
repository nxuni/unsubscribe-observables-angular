import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {
  @Input() instanceNumber = 0;
  subscription1 = new Observable<number>;
  subscription2 = new Observable<number>;


  constructor() { }

  ngOnInit(): void {
    this.subscription1 = interval(100);

    this.subscription2 = interval(100);
  }
}
