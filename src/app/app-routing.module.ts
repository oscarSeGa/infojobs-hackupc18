import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchOfferViewComponent } from './match-offer-view/match-offer-view.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: MatchOfferViewComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
