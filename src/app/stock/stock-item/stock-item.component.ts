import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;
  public stockClasses!: Object;

  constructor () {}

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
        "positive": this.stock.isPositiveChange(),
        "negative": !this.stock.isPositiveChange(),
        "large-change": largeChange,
        "small-change": !largeChange
    };
  }

  toggleFavorite(event: Event) {
    console.log("We are toggling the favorite state for this stock", event);
    this.stock.favorite = !this.stock.favorite;
  }
}
