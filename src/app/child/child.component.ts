import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() placeholderText:string="abc";

  @Input() selectedProduct: boolean = false;
  @Input() productSelected: string = "";

  @Output() addProduct:any = new EventEmitter();
  onAddCart() {
    this.addProduct.emit(this.productSelected);
  }

}
