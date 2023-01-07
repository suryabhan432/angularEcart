import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';
// import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit{

  constructor(private _msgService1:DesignUtilityService){}


  product = "test";  //use for service design utility
  ngOnInit():void{
    this.product = this._msgService1.product;
  }

  btnClick(){
    this._msgService1.messageAlert();
  }



//  btnClick(){
//   const msgService = new MessageService();
//   msgService.messageAlert()
//  }

}
