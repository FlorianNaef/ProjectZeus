import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Platform } from '@ionic/angular';
import {FileOpener} from '@ionic-native/file-opener/ngx';
import * as filesystem from '@capacitor/filesystem';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs ;


@Component({
  selector: 'app-export',
  templateUrl: './export.page.html',
  styleUrls: ['./export.page.scss'],
})
export class ExportPage implements OnInit {

  myForm: FormGroup;
  pdfObj = null;
  base64Image = null;




  constructor(
    private fb: FormBuilder, private plt: Platform, private http: HttpClient, private fileOpener: FileOpener) {}


  ngOnInit() {
    this.myForm = this.fb.group({

    });
    
  }



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



    }//docdefinition

    this.pdfObj = pdfMake.createPdf(docDefinition);
    console.log(this.pdfObj);
    }//createPdf

downloadPdf() {
    this.pdfObj.download();
}




}
