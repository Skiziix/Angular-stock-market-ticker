import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-stock-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {
  public stock!: Stock;
  public stockStyles!: Object;

  constructor () {}

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockStyles = {
        "color": this.stock.isPositiveChange() ? "green" : "red",
        "font-size": largeChange ? "2.0em" : "1.2em"
    };
  }

  toggleFavorite(event: Event) {
    console.log("We are toggling the favorite state for this stock", event);
    this.stock.favorite = !this.stock.favorite;
  }
}
