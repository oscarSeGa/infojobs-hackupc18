import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Subscription } from 'rxjs';

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
  private sub1: Subscription;
  private errorMessage: String;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  ngOnInit() {
    this.sub1 = this.registerService.getCountries().subscribe(
      res => this.countries = res,
      error => this.errorMessage = <any>error
    );

    this.firstForm = this.fb.group({
      //username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      name: ['', Validators.required],
      surname: [''],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: [false, Validators.required],
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
      languages_listening: ['', Validators.required]
    });

    this.fifthForm = this.fb.group({
      knwoledge_name: ['', Validators.required],
      knowledge_level: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    if (this.sub1) this.sub1.unsubscribe();
  }

}
