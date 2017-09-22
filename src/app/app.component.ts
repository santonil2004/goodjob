import { UsersProvider } from './../providers/users/users';
import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MessagePage } from '../pages/message/message';
import { InnerPage } from '../pages/inner/inner';
import { UsersPage } from '../pages/users/users';
import { WorkPage } from '../pages/work/work';
import { MonitorPage } from '../pages/monitor/monitor';
import { RosterPage } from '../pages/roster/roster';



@Component({
  templateUrl: 'app.html'
})




export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, logsOut?: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage, public usersProvider: UsersProvider, public events: Events) {
    this.initializeApp();

    this.usersProvider.hasLoggedIn().then((hasLoggedIn) => {
      this.loadMenu(hasLoggedIn);
    });

    this.listenToLoginEvents();

  }


  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.loadMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.loadMenu(false);
    });
  }

  loadMenu(loggedIn: boolean){
      if(loggedIn){
                // logged in menu
                this.pages = [
                  { title: 'Home', component: HomePage, icon: 'home' },
                  { title: 'Message', component: MessagePage, icon: 'mail'},
                  { title: 'Logout', component: LoginPage, icon: 'person', logsOut: true},
                ];
    } else {
                // guest menu
                this.pages = [
                  { title: 'Home', component: HomePage, icon: 'home' },
                  { title: 'Login', component: LoginPage, icon: 'person'},
                ];
                
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    // if page has logsOut=>true
    if(page.logsOut){
      this.usersProvider.logout();
    }
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

