import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() public childmsg = new EventEmitter();
   
 @Input() public fromparent:any;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.childmsg.emit("this is child message");

  }

}


