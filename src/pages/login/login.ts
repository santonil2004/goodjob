import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(HomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
