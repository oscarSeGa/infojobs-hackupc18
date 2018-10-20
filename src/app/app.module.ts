import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatchOfferViewComponent } from './match-offer-view/match-offer-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ErrorComponent } from './error/error.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { CvComponent } from './cv/cv.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchOfferViewComponent,
    ErrorComponent,
    CvComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatChipsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
