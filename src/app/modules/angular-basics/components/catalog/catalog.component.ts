import { Component } from '@angular/core';

import { Product } from '@angular-basics/interfaces/product.interface';
import { CatalogService } from '@angular-basics/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent  {

  constructor(private catalogService: CatalogService) {}

  get products(): Product[] {
    return this.catalogService.products;
  }

}
