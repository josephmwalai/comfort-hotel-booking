import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  displayedColumns: string[] = [
    'srNo',
    'roomName',
    'isAcAvailable',
    'roomCapacity',
    'isActive',
    'roomTariff',
    'extensionNo',
    'action',
  ];
  dataSource = new MatTableDataSource<any>([]);

  roomList: any[] = [];

  constructor(private roomieSrv: RoomieService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomieSrv.getAllRooms().subscribe((res: any) => {
      this.roomList = res.data;
    });
  }
  AddNewRoom() {
    const obj = {
      roomId: 0,
      roomName: '',
      isAcAvailable: false,
      roomCapacity: 0,
      isActive: false,
      roomTariff: 0,
      extensionNo: '',
    };
    this.roomList.unshift(obj);
  }
  onSaveRoom() {
    this.roomieSrv.saveUpdateRoom(this.roomList).subscribe((res: any) => {
      if (res.result) {
        alert('Rooms Updated Successfully');
      } else {
        alert(res.message);
      }
    });
  }

  onRemove(id: number) {
    this.roomieSrv.deleteRoom(id).subscribe((res: any) => {
      if (res.result) {
        alert('Data Deleted Successfully!');
        this.getAllRooms();
      } else {
        alert(res.message);
      }
    });
  }
  onPageChange(event: PageEvent) {
    console.log(event); // Log the event to see its properties
    // You can implement further logic here, such as fetching data based on the new page event
  }
}
