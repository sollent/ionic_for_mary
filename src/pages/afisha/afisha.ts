import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

/**
 * Generated class for the AfishaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-afisha',
  templateUrl: 'afisha.html',
})
export class AfishaPage {

  id: any;
  Title: any;
  Image: any;
  Genre: any;
  Age: any;
  Country: any;
  Content: any;
  Date: any;
  Time: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.id = this.navParams.get('id');

    this.GetFullData(this.id);
  }

  GetFullData(id){

    this.http.get("http://test9.superresheba.by/project/Mary/Get_Full_Films.php?id="+id)
      .map(res => res.json())
      .subscribe(
        Arr => {
          this.Title = Arr.title;
          this.Image = Arr.image;
          this.Genre = Arr.genre;
          this.Age = Arr.age;
          this.Country = Arr.country;
          this.Content = Arr.anons;
          this.Date = Arr.av_date;
          this.Time = Arr.time;
        }
      );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AfishaPage');
  }

}
