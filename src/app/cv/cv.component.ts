import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { CvService } from './cv.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [CvService]
})
export class CvComponent implements OnInit {

  public sub1: Subscription;
  public cv: {};
  public errorMessage: String;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.sub1 = this.cvService.getCV().subscribe(
      res => this.cv = res,
      error => this.errorMessage = <any>error
    );
  }

}
