import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public resName: String;
  title = 'client';

  constructor() {
    this.resName = 'FOODIES';
  }
}
