import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchOfferViewComponent } from './match-offer-view/match-offer-view.component';

const routes: Routes = [
  {
    path: '',
    component: MatchOfferViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
