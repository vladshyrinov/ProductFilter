import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.scss']
})
export class ProductCardListComponent implements OnInit {
  products: Array<Object> = null;

  constructor(
    private productService: ProductService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.productService.getProducts().toPromise().then(products => {
      this.products = products.offers;
    });

    this.dataService.currentOption.subscribe(value => {
      this.sortProducts(value);
    });
  }

  sortProducts(value: number) {
    switch (value) {
      case 1:
        return this.products.sort(this.comparePriceUp);
      case 2:
        return this.products.sort(this.comparePriceDown);
      case 3:
        return this.products.sort(this.compareDownloadUp);
      case 4:
        return this.products.sort(this.compareDownloadDown);
      case 5:
        return this.products.sort(this.compareUploadUp);
      case 6:
        return this.products.sort(this.compareUploadDown);
      default:
        return;
    }
  }

  comparePriceUp(a, b) {
    return +a.cost.effectiveCost.amount - +b.cost.effectiveCost.amount;
  }

  comparePriceDown(a, b) {
    return +b.cost.effectiveCost.amount - +a.cost.effectiveCost.amount;
  }

  compareDownloadUp(a, b) {
    return +a.contractTerm.downloadSpeed.amount - +b.contractTerm.downloadSpeed.amount;
  }

  compareDownloadDown(a, b) {
    return +b.contractTerm.downloadSpeed.amount - +a.contractTerm.downloadSpeed.amount;
  }

  compareUploadUp(a, b) {
    return +a.contractTerm.uploadSpeed.amount - +b.contractTerm.uploadSpeed.amount;
  }

  compareUploadDown(a, b) {
    return +b.contractTerm.uploadSpeed.amount - +a.contractTerm.uploadSpeed.amount;
  }

}
