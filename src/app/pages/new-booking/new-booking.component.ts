import { Component, OnInit } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.scss',
})
export class NewBookingComponent implements OnInit {
  bookingObj: any = {
    name: '',
    mobileNo: '',
    email: '',
    aadharNo: '',
    city: '',
    address: '',
    bookingId: 0,
    roomId: 0,
    customerId: 0,
    bookingFromDate: '',
    bookingToDate: '',
    createdDate: new Date(),
    bookingRate: 0,
    naration: '',
    createdBy: 0,
    hotelBookingDetails: [],
  };

  guestObj: any = {
    bookingDetailId: 0,
    bookingId: 0,
    customerName: '',
    aadharCardNo: '',
  };

  roomList: any[] = [];

  constructor(private roomieSrv: RoomieService) {}

  ngOnInit(): void {
    this.loadRooms();
  }
  loadRooms() {
    this.roomieSrv.getAllRooms().subscribe((res: any) => {
      this.roomList = res.data;
    });
  }
  addGuest() {
    const obj = JSON.stringify(this.guestObj);
    const parseobj = JSON.parse(obj);
    this.bookingObj.hotelBookingDetails.unshift(parseobj);
  }

  onRemoveGeust(index: number) {
    const isremove = confirm('Do you want to remove the Geust?');
    if (isremove) {
      this.bookingObj.hotelBookingDetails.splice(index, 1);
      alert('Geust is removed successfully!');
    }
  }

  onReserveBooking() {
    this.roomieSrv.createBooking(this.bookingObj).subscribe((res: any) => {
      if (res.result) {
        alert('Room Reserved Successfully!');
      } else {
        alert(res.message);
      }
    });
  }
}
