import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number = 0;
  updatedAt?: number;

  get canItBeDecreased(): boolean {
    return this.counter <= 0;
  }

  public increment(): void {
    this.updatedAt = Date.now();
    this.counter++;
  }

  public decrement(): void  {
    this.updatedAt = Date.now();
    this.counter--;
  }

  public clear(): void {
    this.updatedAt = Date.now();
    this.counter = 0;
  }
}
