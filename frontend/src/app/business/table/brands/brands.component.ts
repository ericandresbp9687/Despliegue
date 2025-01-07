import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../interfaces/brands.interface';
import { NgFor, NgIf } from '@angular/common';
import { NgControlStatusGroup } from '@angular/forms';
import { BrandService } from '../../../services/brands.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export default class ListBrandsComponent implements OnInit {
  listBrands: Brand[] = []
  loading: boolean = false;

  constructor(private _brandService: BrandService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getListBrands();
  }

  getListBrands() {
    this.loading = true;

    this._brandService.getListBrand().subscribe((data: Brand[]) => {
      this.listBrands = data;
      this.loading = false;
    })
  }

  deleteBrand(id: number) {
    this.loading = true;
    this._brandService.deleteBrand(id).subscribe(() => {
      this.getListBrands();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
