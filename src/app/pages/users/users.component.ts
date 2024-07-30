import { Component, OnInit } from '@angular/core';
import { RoomieService } from '../../services/roomie.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  userList: any[] = [];
  userObj: any = {
    userId: 0,
    userName: '',
    password: '',
    role: '',
  };

  constructor(private roomieSrv: RoomieService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.roomieSrv.getAllUsers().subscribe((res: any) => {
      this.userList = res.data;
    });
  }
  onEdit(data: any) {
    const strObj = JSON.stringify(data);
    this.userObj = JSON.parse(strObj);
  }

  onDelete(id: number) {
    const isdelete = confirm('Are you sure you want to Delete?');
    if (isdelete) {
      this.roomieSrv.deleteUser(id).subscribe((res: any) => {
        if (res.result) {
          alert('User Deleted Successfully!');
          this.getUsers();
        } else {
          alert(res.message);
        }
      });
    }
  }

  onSaveUser() {
    const issave = confirm("Check details before you commit?");
    if(issave){
      this.roomieSrv.addUpdateUser(this.userObj).subscribe((res: any) => {
        if (res.result) {
          alert('User Created Successfully!');
          this.getUsers();
        } else {
          alert(res.message);
        }
      });
    }
    
  }
}
