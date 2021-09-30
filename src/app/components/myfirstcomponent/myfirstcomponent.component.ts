import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {
  public persons = [{
    "id":1,name:"hema",color:'black'},
    {"id":2,name:"saru",color:'white'    },
    
  ]
  public name():any {
    for(let person of this.persons){
      if(person.id ===2){
        return person.name;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
