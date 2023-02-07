import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  tasks:Array<any>;

  // constructor(){
  //   this.tasks=[];
  // }

  add(e:any){
    // console.log(this.tasks);
    this.tasks.push(e);

  }
  constructor(){
    this.tasks=[];
  }

}
