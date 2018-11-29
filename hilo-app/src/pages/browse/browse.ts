import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import {Product} from "../../classes/Product";
import {ViewItemPage} from "../view-item/view-item";
import {PicviewPage} from "../picview/picview";

/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {

  items: Array<Product> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.initialize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

  initialize(){
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Tropical Rhythms", 200, "bottle(s)", 200, 6, "Grace Fruit Juice of assorted natural Flavours"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));

  }

  getItems(){
    return this.items;
  }

  viewPic(item: Product){
    let popover = this.popoverCtrl.create(PicviewPage, item);
    popover.present();
  }

  viewItem(item: Product) {
    this.navCtrl.push(ViewItemPage, item);
  }
}
