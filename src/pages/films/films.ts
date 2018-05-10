import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {AfishaPage} from "../afisha/afisha";

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  FilmsData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    this.GetData();
  }

  GetData(){

    this.http.get("http://test9.superresheba.by/project/Mary/All_Films.php")
      .map(res => res.json())
      .subscribe(
        Arr => {
          this.FilmsData = Arr;
          console.log(Arr);
        }
      );
  }

  openAfisha(id){
    this.navCtrl.push(AfishaPage, {id: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

}
