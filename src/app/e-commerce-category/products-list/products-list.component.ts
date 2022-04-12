import { Component, OnInit } from '@angular/core';
import { MockDataService } from 'src/app/shared/services/mock-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any[] = []
  isList = true
  constructor(private _dataServise: MockDataService) { }

  ngOnInit(): void {
    this._dataServise.getProductsCategory().subscribe(res => {
      this.products = res.products
    })
  }
  changeView(e:string) {
    if (e == 'list') {
      this.isList = true;
    } else {
      this.isList = false;
    }
  }

  onFilter(e:string) {
    if (e == 'H-L') {
      this.products.sort((a, b) => a.price > b.price ? -1 : 1)
    } else {
      this.products.sort((a, b) => a.price > b.price ? 1 : -1)
    }
  }
}
