import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/categories.interface'; 
import { CategoryService } from '../../../services/categories.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class ListCategoriesComponentt implements OnInit {
  listCategories: Category[] = []
  loading: boolean = false;

  constructor(private _categoryService: CategoryService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories() {
    this.loading = true;

    this._categoryService.getListCategory().subscribe((data: Category[]) => {
      this.listCategories = data;
      this.loading = false;
    })
  }

  deleteCategory(id: number) {
    this.loading = true;
    this._categoryService.deleteCategory(id).subscribe(() => {
      this.getListCategories();
      this.toastr.warning('La categoría fue eliminada con exito', 'Categoría eliminada');
    })
  }
}
