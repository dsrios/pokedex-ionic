import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() details;
  @Input() name;
  typesName = [];

  constructor() {

  }

  ngOnInit() {
    this.details.types.forEach( element => {
      this.typesName.push(element.type.name);
    });
  }

}
