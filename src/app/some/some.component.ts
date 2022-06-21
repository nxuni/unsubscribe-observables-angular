import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit, OnDestroy {
  @Input() instanceNumber = 0;

  subscription1: Subscription | undefined
  x1: number | undefined;

  subscription2: Subscription | undefined;
  x2: number | undefined;

  constructor() { }

  ngOnInit(): void {
    this.subscription1 = interval(100).subscribe(x => {
      this.x1 = x;
      console.log(this.instanceNumber + " - 1 - " + this.x1);
    });

    this.subscription2 = interval(100).subscribe(x => {
      this.x2 = x;
      console.log(this.instanceNumber +" - 2 - " + this.x2);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription1) {
      this.subscription1.unsubscribe();
      console.log("1 - unsubscribed");

    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
      console.log("2 - unsubscribed");

    }
  }
}
