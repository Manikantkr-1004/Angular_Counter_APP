import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  count: number = 0;

  Inc():void{
    this.count++;
  }
  Dec():void{
    if(this.count>0){
      this.count--;
    }
  }

  Reset():void{
    this.count = 0;
  }
}
