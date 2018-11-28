import {Product} from "./Product";

export class Cart{

  contents: Array<Product> = [];

  constructor(){}

  getContents(){
    return this.contents;
  }

  addItem(item: Product){
    this.getContents().push(item);
  }

  removeItem(id: number){
    this.getContents().splice(Product.searchProd(id, this.getContents()), 1);
  }

  getTotal(){
    let tot = 0;
    for(let item of this.getContents()){
      tot += item.getValue();
    }
    return tot;
  }

  updateItem(id: number, q: number){
    this.getContents()[Product.searchProd(id, this.getContents())].item_update("q", q);
  }

  
}
