import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-trackinglisting',
  templateUrl: './product-trackinglisting.component.html',
  styleUrls: ['./product-trackinglisting.component.css']
})
export class ProductTrackinglistingComponent implements OnInit {

  albumInfo: Album;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => 
      this.albumInfo = response);
  }

}
