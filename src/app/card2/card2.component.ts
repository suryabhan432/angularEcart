import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../appServices/design-utility.service';
// import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit{

  constructor(private _msgService:DesignUtilityService){}


  product = "test";  //use for service design utility
  ngOnInit(): void {
    this.product = this._msgService.product;
  }

  btnClick(){
    // const msgService = new MessageService();
    // msgService.messageAlert();
    this._msgService.messageAlert();
   }

}
