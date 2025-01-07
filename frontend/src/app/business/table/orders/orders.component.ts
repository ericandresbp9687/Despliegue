import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../../interfaces/orders.interface';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../../../services/orders.service';


@Component({
  selector: 'app-orders',
  standalone:true,
  imports: [NgIf,NgFor],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export default class ListOrdersComponent implements OnInit {
  listOrders: Order[] = []
  loading: boolean = false;

  constructor(private _orderService: OrderService, private toastr: ToastrService) { }
  

  ngOnInit(): void {
    this.getListOrders();
  }

  getListOrders() {
    this.loading = true;

    this._orderService.getListOrders().subscribe((data: Order[]) => {
      this.listOrders = data;
      this.loading = false;
    })
  }

  deleteOrder(id: number) {
    this.loading = true;
    this._orderService.deleteOrder(id).subscribe(() => {
      this.getListOrders();
      this.toastr.warning('La orden fue eliminado con exito', 'Orden eliminado');
    })
  }
}

