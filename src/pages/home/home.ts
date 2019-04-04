import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public alertController: AlertController) {

  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  async presentAlert() {

    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('LOCATION => ', resp);
     }).catch((error) => {
       console.log('Error getting location', error);
     });




    // const alert = await this.alertController.create({
    //   title: 'Alert',
    //   subTitle: 'Subtitle',
    //   message: 'This is an alert message.',
    //   buttons: [{
    //     text: 'Reintentar',
    //     handler: () => {

    //       this.geolocation.getCurrentPosition().then((resp) => {
    //         console.log('LOCATION => ', resp);
    //        }).catch((error) => {
    //          console.log('Error getting location', error);
    //        });

    //     }
    //   }]
    // });

    // await alert.present();
  }

}
