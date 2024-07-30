import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingCalendarComponent } from './pages/booking-calendar/booking-calendar.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CompanyComponent } from './pages/company/company.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'booking-calendar',
        component: BookingCalendarComponent,
      },
      {
        path: 'bookings',
        component: BookingListComponent,
      },
      {
        path: 'newBooking',
        component: NewBookingComponent,
      },
      {
        path: 'rooms',
        component: RoomsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
