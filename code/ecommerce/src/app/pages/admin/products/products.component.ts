import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { truncateSync } from 'fs';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isSidePanal:boolean = false
}
