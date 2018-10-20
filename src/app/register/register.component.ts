import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { RegisterService } from './register.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
=======
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
>>>>>>> 18202ac2f7c7cf501c690fbba98ca82529110b73

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  public firstForm: FormGroup;
  public secondForm: FormGroup;
  public thirdForm: FormGroup;
  public forthForm: FormGroup;
  public fifthForm: FormGroup;
  public countries: any[];

  public errorMessage: String;
  public successMessage: String;
  public levels: String[] = ["Nulo", "Básico", "Intermedio", "Avanzado", "Nativo"];
  public know_level: String[] = ["Bajo", "Medio", "Alto"]
  public experienceJobs: any[] = [];
  public studies: any[] = [];
  public languages: any[] = [];
  public knowledges: any[] = [];

  public sub1: Subscription;
  public sub2: Subscription;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) {}

  ngOnInit() {
    this.sub1 = this.registerService.getCountries().subscribe(
      res => this.countries = res,
      error => this.errorMessage = <any>error
    );

    this.firstForm = this.fb.group({
      name: ['', Validators.required],
      surname: [''],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      cp: ['', Validators.required],
      place: ['', Validators.required],
      phone: ['']
    });

    this.secondForm = this.fb.group({
      experience_job: ['', Validators.required],
      experience_role: ['', Validators.required],
      experience_first_date: ['', Validators.required],
      experience_end_date: ['', Validators.required]
    });

    this.thirdForm = this.fb.group({
      studies_title: ['', Validators.required],
      studies_first_date: ['', Validators.required],
      studies_end_date: ['', Validators.required],
      studies_center: ['']
    });

    this.forthForm = this.fb.group({
      languages_name: ['', Validators.required],
      languages_speaking: ['', Validators.required],
      languages_reading: ['', Validators.required],
      languages_writing: ['', Validators.required]
    });

    this.fifthForm = this.fb.group({
      knwoledge_name: ['', Validators.required],
      knowledge_level: ['', Validators.required]
    });
  }

  addExperienceJob(formDirective: FormGroupDirective) {
    this.experienceJobs.push(this.secondForm.value);
    formDirective.resetForm();
    this.secondForm.reset();
  }

  addStudy(formDirective: FormGroupDirective) {
    this.studies.push(this.thirdForm.value);
    formDirective.resetForm();
    this.thirdForm.reset();
  }

  addLanguage(formDirective: FormGroupDirective) {
    this.languages.push(this.forthForm.value);
    formDirective.resetForm();
    this.forthForm.reset();
  }

  addKnowledge(formDirective: FormGroupDirective) {
    this.knowledges.push(this.fifthForm.value);
    formDirective.resetForm();
    this.fifthForm.reset();
  }

  saveCV() {
    var cv = {
      "personal_information": this.firstForm.value,
      "experience": this.experienceJobs,
      "studies": this.studies,
      "languages": this.languages,
      "knowledge": this.knowledges
    };
    console.info("CV", cv);
    this.sub2 = this.registerService.saveCV(cv).subscribe(
      res => {
        this.successMessage = res;
        this.router.navigate(['/']);
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnDestroy(): void {
    if (this.sub1) this.sub1.unsubscribe();
    if (this.sub2) this.sub2.unsubscribe();
  }

}
