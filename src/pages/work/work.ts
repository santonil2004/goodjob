import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {

    buttonColorList: Array<string> = ["red", "green"];
    workLabelList: Array<string> = ["Start Working!", "Enjoy Working!"];

    buttonColor: string = this.buttonColorList[0];
    workLabel: string = this.workLabelList[0];

    isWorking: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public altCtrl: AlertController) {
  }

  toggleWorking(){

    if(this.isWorking){
      this.buttonColor = this.buttonColorList[0];
      this.workLabel = this.workLabelList[0];
      this.isWorking = false;
    } else {
      this.buttonColor = this.buttonColorList[1];
      this.workLabel = this.workLabelList[1];
      this.isWorking = true;
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }

}
