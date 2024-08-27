import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StockItemComponent } from './stock/stock-item/stock-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StockItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stock-market';
}
