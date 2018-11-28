import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Product} from "../../classes/Product";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initialize();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }


  initialize(){
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
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));
    this.items.push(new Product("Ting", 120, "bottle(s)", 100, 6, "Carbonated Grapefruit beverage"));

  }

}
