import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomieService } from '../../services/roomie.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  loggedUserData: any;

  constructor(private router: Router, private roomieService: RoomieService) {}

  ngOnInit(): void {
    const localData = this.roomieService.getItem('hotelUser');
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
    }
  }

  onLogoff(): void {
    this.loggedUserData = undefined;
    this.roomieService.removeItem('hotelUser');
    this.router.navigateByUrl('/login');
  }
  
}
