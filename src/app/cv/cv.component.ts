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

  public firstForm: FormGroup;
  public cv: any = [];
  public sub1: Subscription;
  public errorMessage: string = ""

  constructor(private fb: FormBuilder, private cvService: CvService) { }

  ngOnInit() {
    console.log("DEBUG");
    this.sub1 = this.cvService.getCV().subscribe(
      res => {
        this.cv = res;
        console.log(this.cv);
      },
      error => this.errorMessage = <any>error
    );
    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      surname: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      birthday: ['', Validators.required],
      gender: [''],
      country: ['', Validators.required],
      cp: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      place: ['', Validators.required],
      phone: ['', Validators.compose([Validators.minLength(9), Validators.maxLength(9)])],
      github: [''],
      bitbucket: [''],
      url: ['']
    });
  }

}
