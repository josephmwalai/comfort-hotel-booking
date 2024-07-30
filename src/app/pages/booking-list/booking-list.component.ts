import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RoomieService } from '../../services/roomie.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss'],
})
export class BookingListComponent implements OnInit {
  bookings: any[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: string[] = [
    'bookingId',
    'userName',
    'passengerName',
    'mobileNo',
    'bookingFromDate',
    'bookingToDate',
    'bookingRate',
    'naration',
  ];

  constructor(private roomieSrv: RoomieService) {}

  ngOnInit(): void {
    this.bookingDetails();
  }

  bookingDetails() {
    this.roomieSrv.getAllBookings().subscribe((res: any) => {
      this.bookings = res.data;
      this.dataSource.data = this.bookings;
    });
  }

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    console.log(event);
  }
}
