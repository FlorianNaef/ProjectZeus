import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import { StatusBar } from '@capacitor/status-bar';

import { AuthService } from './shared/services/auth.service';


const firebaseConfig = {
  apiKey: 'AIzaSyABlu0Ivm43H0OhVf3mZ7lkycZxYe3RW4Q',
  authDomain: 'hellodevinthefuture.firebaseapp.com',
  databaseURL: 'https://hellodevinthefuture-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hellodevinthefuture',
  storageBucket: 'hellodevinthefuture.appspot.com',
  messagingSenderId: '65793317461',
  appId: '1:65793317461:web:7b44e3730911331b7852dc',
  measurementId: 'G-0X102K8724'
  }


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FileOpener, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
