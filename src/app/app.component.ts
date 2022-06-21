import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false;
  currentInstanceNumber = 0;

  clicked() {
    this.show = !this.show;
    if (this.show)
      this.currentInstanceNumber = this.currentInstanceNumber + 1;
  }
}
