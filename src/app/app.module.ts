import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessagePage } from '../pages/message/message';
import { LoginPage } from '../pages/login/login';
import { InnerPage } from '../pages/inner/inner';
import { UsersPage } from '../pages/users/users';
import { WorkPage } from '../pages/work/work';
import { MonitorPage } from '../pages/monitor/monitor';
import { RosterPage } from '../pages/roster/roster';
import { UsersProvider } from '../providers/users/users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessagePage,
    LoginPage,
    InnerPage,
    UsersPage,
    WorkPage,
    MonitorPage,
    RosterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessagePage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}
