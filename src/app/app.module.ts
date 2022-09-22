import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



/**
 * import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: 'AIzaSyABlu0Ivm43H0OhVf3mZ7lkycZxYe3RW4Q',
  authDomain: 'hellodevinthefuture.firebaseapp.com',
  databaseURL: 'https://hellodevinthefuture-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hellodevinthefuture',
  storageBucket: 'hellodevinthefuture.appspot.com',
  messagingSenderId: '65793317461',
  appId: '1:65793317461:web:d3944dbd527e48097852dc',
  measurementId: 'G-W4NKYNK316'
};
 *
 * AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
 */

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
