import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/products.interface';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../../services/products.service';


@Component({
  selector: 'app-products',
  standalone:true,
  imports: [NgIf,NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export default class ListProductsComponent implements OnInit {
  listProducts: Product[] = []
  loading: boolean = false;

  constructor(private _productService: ProductService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProduct(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}

