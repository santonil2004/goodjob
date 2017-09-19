import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { InnerPage } from '../inner/inner';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // submitted flag
  submitted = false;

  // default object
  login = {username:'', password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      if(this.login.username=="sanil" && this.login.password=="sanil_123"){
        this.navCtrl.push(InnerPage);
        return;
      }
    } 
      this.showAlert();
    
  }


  // 
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Authorization failed!',
      subTitle: 'Incorrect username or password.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
