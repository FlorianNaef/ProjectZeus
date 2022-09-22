import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Platform } from '@ionic/angular';
import {FileOpener} from '@ionic-native/file-opener/ngx';

//import{CameraResultType, CameraSource, FilesystemDirectory} from '@capacitor/core'
//import * as core from '@capacitor/core';
//const{Camera, Filesytem} = core.Plugins;


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs ;



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myForm: FormGroup;
  pdfObj = null;
  base64Image = null;
  photoPreview = null;
  logoData = null;


  constructor(
    private fb: FormBuilder, private plt: Platform, private http: HttpClient, private fileOpener: FileOpener) {}

ngOnInit() {
  this.myForm = this.fb.group({
    showLogo:true,
    from: 'Simon',
    to: 'Max',
    text: 'TEST'
  });
}



loadLocalAssetToBase64() {
  this.http.get('./Documents/Logo.png', {responseType: 'blob'})
  .subscribe(res => {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.logoData = reader.result;
    };
    reader.readAsDataURL(res);
  });
    }

    /*
    async takepicture() {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing:false,
        resultType: core.CameraResultType.Base64,
        source: core.CameraSource.Camera
      });
      this.base64Image = image.base64String;
      this.photoPreview = `data:image/jpeg;base64,${this.base64Image}`;
    }
*/

createPdf() {
const formValue = this.myForm.value;

const docDefinition = {
  watermark: {text: 'ionic Academy', color: 'blue' , opacity: 0.2, bold: true },
  content: [
    {
      columns: [
        {
          text: new Date().toDateString(),
          alignment: 'right'
        }
        ]//columns

    },
      { text: 'REMINDER', style: 'header'},
    {
      columns: [
        {
          width: '50%',
          text: 'From',
          style: 'subheader'
        },
        {
          width: '50%',
          text: 'To',
          style: 'subheader'
        }
      ]
    },
    {
      columns: [
        {
          width: '50%',
          text: formValue.to
        },
        {
          width: '50%',
          text: formValue.to
        }
      ]
    },
    { text: formValue.text, margin: [0, 20, 0, 20]},


  ],//content

  styles:{
    header:{
      fontSize:18,
      bold: true,
      margin: [0, 15, 0, 0,]
    },
    subheader: {
      fontSize:14,
      bold: true,
      margin: [0, 15, 0, 0]
    }
  }



};//docdefinition

this.pdfObj = pdfMake.createPdf(docDefinition);
console.log(this.pdfObj);
}//createPdf

downloadPdf() {
  if(this.plt.is('cordova')) {

  }else{
    this.pdfObj.download();
  }
}


}//Homepage



