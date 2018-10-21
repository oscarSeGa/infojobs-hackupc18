import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { CvService } from './cv.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

export interface LanguageElement {
  languages_name: string;
  languages_speaking: string;
  languages_reading: string;
  languages_writing: string;
}

var ELEMENT_DATA: LanguageElement[] = [];

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [CvService]
})
export class CvComponent implements OnInit {

  public sub1: Subscription;
  public cv: any;
  public errorMessage: String;
  public displayedColumns: string[] = ['languages_name', 'languages_speaking', 'languages_reading', 'languages_writing'];
  public dataSource = ELEMENT_DATA;

  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.sub1 = this.cvService.getCV().subscribe(
      res => {
        this.cv = res;
        console.info("CV", this.cv.languages);
        ELEMENT_DATA = this.cv.languages;
      },
      error => this.errorMessage = <any>error
    );
  }

}
