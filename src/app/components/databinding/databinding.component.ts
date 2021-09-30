import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  public name:string="hema";
  public isDisabled="two";
  public names=['hema','chandu','suhi','pradhyu'];
  public persons:any=[{id:1,name:"hema",branch:"ece"},{id:2,name:"saru1",branch:"csc"},{id:3,name:"hemasaraswathi",branch:"eee"}];
  public name1():any{
      for(let person of this.persons){
        if(person.id===2)
        return person.name;
      }
  }

  constructor() { }

  ngOnInit(): void {
  }
  onClick(message: any){
      console.log(message);
  }



}
