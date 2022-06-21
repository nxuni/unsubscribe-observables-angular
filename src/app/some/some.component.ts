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

  parentSubscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription1 = interval(100).subscribe(x => {
      this.x1 = x;
      console.log(this.instanceNumber + " - 1 - " + this.x1);
    });
    this.parentSubscription.add(this.subscription1);

    this.subscription2 = interval(100).subscribe(x => {
      this.x2 = x;
      console.log(this.instanceNumber + " - 2 - " + this.x2);
    });
    this.parentSubscription.add(this.subscription2);
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
    console.log("subscriptions unsubscribed");
  }
}
