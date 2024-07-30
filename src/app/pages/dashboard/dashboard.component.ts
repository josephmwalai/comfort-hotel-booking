import { Component, OnInit } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  cardData: any;

  constructor(private roomieSrv: RoomieService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.roomieSrv.getData().subscribe((res: any) => {
      if (res.result) {
        this.cardData = res.data;
      } else {
        alert(res.message);
      }
    });
  }
}
