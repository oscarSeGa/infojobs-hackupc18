import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-match-offer-view',
  templateUrl: './match-offer-view.component.html',
  styleUrls: ['./match-offer-view.component.css']
})
export class MatchOfferViewComponent implements OnInit {

  offers = [
    {'title': "El trabajo de tu vida joputa"}
  ];

  descarted = [];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log("Entro al TRUE");
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log("Entro al ESLE");
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
