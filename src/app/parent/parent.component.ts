import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  selProduct: boolean = false;
  protSelected: string = "";
  onSelectedProduct(product: any) {
    this.selProduct = true;
    this.protSelected = product;
  }




  addProduct: any;
  onAddedProduct(proData: any) {
    this.addProduct = proData;
  }

  check: boolean = true;
  onCheckOut() {
    this.check = false;
  }




  // myText="search in yahoo";

}



// addProduct: any;
//   onAddCart() {
//     this.addProduct = this.protSelected;
//   }
