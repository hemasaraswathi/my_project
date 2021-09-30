import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SudentService {
  

  constructor() { }
  getstudents(){
    return [
      {id:1,"name":"hema","course":"angular"},
      {id:2,"name":"hema1","course":"react" }, 
      {id:3,"name":"hema2","course":"vuejs"}
  
  ];

  }
}
