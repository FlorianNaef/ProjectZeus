import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegulationService {

  constructor(private router: Router) { }

  signIn() {
    this.router.navigateByUrl('chapter');
  }

}

