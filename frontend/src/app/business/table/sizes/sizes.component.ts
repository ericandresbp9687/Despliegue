import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SizeService } from '../../../services/sizes.service';
import { ToastrService } from 'ngx-toastr';
import { Size } from '../../../interfaces/sizes.interface';

@Component({
  selector: 'app-sizes',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './sizes.component.html',
  styleUrl: './sizes.component.css'
})
export default class ListSizesComponent implements OnInit {
  listSizes: Size[] = []
  loading: boolean = false;

  constructor(private _sizeService: SizeService, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.getListSize();
  }

  getListSize() {
    this.loading = true;

    this._sizeService.getListSizes().subscribe((data: Size[]) => {
      this.listSizes = data;
      this.loading = false;
    })
  }

  deleteSize(id: number) {
    this.loading = true;
    this._sizeService.deleteSize(id).subscribe(() => {
      this.getListSize();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
