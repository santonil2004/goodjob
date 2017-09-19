import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { InnerPage } from '../pages/inner/inner';
import { UsersPage } from '../pages/users/users';
import { WorkPage } from '../pages/work/work';
import { MonitorPage } from '../pages/monitor/monitor';
import { RosterPage } from '../pages/roster/roster';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    InnerPage,
    UsersPage,
    WorkPage,
    MonitorPage,
    RosterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    InnerPage,
    UsersPage,
    WorkPage,
    MonitorPage,
    RosterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
