import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersPage } from '../users/users';
import { WorkPage } from '../work/work';
import { MonitorPage } from '../monitor/monitor';
import { RosterPage } from '../roster/roster';

@Component({
  selector: 'page-inner',
  templateUrl: 'inner.html',
})
export class InnerPage {

  tab1Root: any = WorkPage
  tab2Root: any = RosterPage
  tab3Root: any = UsersPage
  tab4Root: any = MonitorPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InnerPage');
  }

}
