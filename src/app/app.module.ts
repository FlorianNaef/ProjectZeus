import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

/*PDF import*/
import {HttpClientModule} from '@angular/common/http';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { StatusBar } from '@capacitor/status-bar';



const firebaseConfig = {
  apiKey: 'AIzaSyABlu0Ivm43H0OhVf3mZ7lkycZxYe3RW4Q',
  authDomain: 'hellodevinthefuture.firebaseapp.com',
  databaseURL: 'https://hellodevinthefuture-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hellodevinthefuture',
  storageBucket: 'hellodevinthefuture.appspot.com',
  messagingSenderId: '65793317461',
  appId: '1:65793317461:web:7b44e3730911331b7852dc',
  measurementId: 'G-0X102K8724'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}
