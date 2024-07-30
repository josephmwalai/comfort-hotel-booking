import { Component, OnInit } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent implements OnInit {
  customerData: any[] = [];

  constructor(private roomieSrv: RoomieService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.roomieSrv.getAllCustomers().subscribe((res: any) => {
      this.customerData = res.data;
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.customerData = this.customerData.slice(startIndex, endIndex);
  }

}
