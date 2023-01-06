import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  products = [
    {proimg:"",name:"laptop",id:"pr001",price:15000},
    {proimg:"",name:"mobile",id:"pr002",price:15000},
    {proimg:"",name:"tv",id:"pr003",price:15000},
    {proimg:"",name:"washing machine",id:"pr004",price:15000}
  
  ]

  users:any[]=[];

  onCreateUser(uname:any){
    this.users.push({
      name: uname.value
      
  });
  }

  onRemoveUser(){
    this.users.splice(this.users.length-1);
  }

  onRemoveItem(item:any){
    this.users.splice(item,1);
  }

}
