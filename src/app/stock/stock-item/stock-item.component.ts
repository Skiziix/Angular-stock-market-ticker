import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {
  public stocks!: Array<Stock>;
  public stockStyles!: Object;

  constructor () {}

  ngOnInit() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Second Stock Company', 'SSC', 10, 20),
      new Stock('Last Stock Company', 'LSC', 876, 765)
    ];
  }

  toggleFavorite(event: Event, index: number) {
    console.log("We are toggling the favorite state for this stock", event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }
}
