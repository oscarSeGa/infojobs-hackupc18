import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchOfferViewComponent } from './match-offer-view/match-offer-view.component';
import { CvComponent } from './cv/cv.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MatchOfferViewComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path:'**',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
