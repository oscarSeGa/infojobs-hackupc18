import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material';
import { MatchOfferViewService } from './match-offer-view.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-match-offer-view',
  templateUrl: './match-offer-view.component.html',
  styleUrls: ['./match-offer-view.component.css'],
  providers: [MatchOfferViewService]
})
export class MatchOfferViewComponent implements OnInit {

  offers:Array<any> = new Array<any>();
  descarted = [];
  apply = [];

  public errorMessage: String;

  public sub1: Subscription;

  constructor(public snackBar: MatSnackBar, private matchOfferViewService: MatchOfferViewService) { }

  ngOnInit() {
    this.sub1 = this.matchOfferViewService.getOffers().subscribe(
      res => {this.offers = res.offers;console.log(this.offers);},
      error => this.errorMessage = <any>error
    );
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      var item:any = event.previousContainer.data[event.currentIndex];
      if(event.container.id === "apply_list") {
        this.openSnackBar("APPLY:"+ item.title , "Ok");
      } //array i index del item per cridar al apply
      else {
        this.openSnackBar("Descartado:"+ item.title, "Ok");
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
