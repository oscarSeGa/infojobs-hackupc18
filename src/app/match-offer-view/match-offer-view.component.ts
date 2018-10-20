import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-match-offer-view',
  templateUrl: './match-offer-view.component.html',
  styleUrls: ['./match-offer-view.component.css']
})
export class MatchOfferViewComponent implements OnInit {

  offers = [
    {'title': "El trabajo de tu vida joputa"},
    {'title': "El trabajo de tu vida joputa"},
    {'title': "El trabajo de tu vida joputa"}
  ];

  descarted = [];
  apply = [];

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(event.container.id === "apply_list") {
        this.openSnackBar("Has aplicado a:"+ "JobOffer", "Ok");
      } //array i index del item per cridar al apply
      else {
        this.openSnackBar("Has descartado la oferta:"+ "JobOffer", "Ok");
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
