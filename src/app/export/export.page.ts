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
  logoData = null;
  p


  constructor(
    private fb: FormBuilder, private plt: Platform, private http: HttpClient, private fileOpener: FileOpener) {}


  ngOnInit() {
    this.myForm = this.fb.group({
      text1: 'C1	Allgemeines',
      text2:'C1.2	Geltungsbereich',
      text3: '(3)	Vorliegende Bestimmungen gelten als harmonisierte Ergänzungen im Verteilnetzgebiet der Mitglieder des Elektrizitätswerke-Verbandes St.Gallen-Appenzell und können durch diese übernommen, ergänzt oder geändert werden.',
      text4: 'C1.5	(Haus-)Anschlusspunkt (AP) und Verknüpfungspunkt (V)',
      text5: '(7)	Sämtliche Beschriftungen (Wohnungen, Messeinrichtungen, Bezüger-Überstrom-unterbrecher, Unterverteilungen, Sonnerietaster usw.) sind von Beginn der Planung bis zur Ausführung nach den Vorgaben des Bundesamtes für Statistik vorzunehmen, welche auf dem Formular C1.5 ersichtlich sind.(sh. Eidg. Gebäude- und Wohnungsregister GWR, housing-stat.ch)',
      text6: 'C1.9	Steuerung von Anlagen und Geräten',
      text7: 'C1.9.4	Abwendung eines gefährdeten oder gestörten Netzbetriebs',
      text8: 'Folgende Verbraucher sind zur Abwendung eines gefährdeten oder gestörten Netzzustands mit einem Sperrschütz auszurüsten (unabhängig von einer 24-h-Freigabe), welcher es dem VNB erlaubt, die Verbraucher bei Bedarf auszuschalten: -	Boiler über [....] kW (230V Wärmepumpenboiler müssen nicht gesperrt werden) - 	Wärmepumpen mit einer Kompressorleistung über [....] kW - 	Notheizungen in Wärmepumpen über [....] kW -	Elektrische Widerstandsheizungen über [....] kW (Für gewisse Anlagen oder Geräte (z.B. elektrische Widerstandsheizungen) gibt es Vorgaben bzw. Einschränkungen der kantonalen Energiegesetzgebung, diese sind auf jeden Fall einzuhalten.)'
    });
    this.laodLocalAssetToBase64();
  }

  laodLocalAssetToBase64() {
    this.http.get('./assets/icon/logo.png', {responseType: 'blob'})
    .subscribe(res => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.logoData = reader.result;
      }
      reader.readAsDataURL(res);
    })
  }

  createPdf() {
    const formValue = this.myForm.value;
    let logo = {image: this.logoData, width: 120};
    const docDefinition = {
      //watermark: {text: 'ionic Academy', color: 'blue' , opacity: 0.2, bold: true },
      content: [
        {
          columns: [
            logo,
            {
              text: new Date().toDateString(),
              alignment: 'right'
            }
            ]//columns

        },
          { text: 'Anhänge', style: 'header'},
        {
          columns: [
            {
              width: '100%',
              text: formValue.text1,
              style: 'subheader'
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text2,
              style: 'sub-subheader',
              bold: 'yes'
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text3,
              style: 'sub-subheader',
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text4,
              style: 'sub-subheader',
              bold: 'yes'
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text5,
              style: 'sub-subheader',
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text6,
              style: 'sub-subheader',
              bold: 'yes',
              space: 'white-space',
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text7,
              style: 'sub-subheader',
              bold: 'yes'
            },
          ]
        },
        {
          columns: [
            {
              width: '100%',
              text: formValue.text8,
              style: 'sub-subheader',
            },
          ]
        },
        { text: formValue.text, margin: [0, 200, 0, 200]},


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
