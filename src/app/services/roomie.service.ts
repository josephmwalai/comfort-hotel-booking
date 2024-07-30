import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RoomieService {
  apiEndPoint: string =
    'https://freeapi.miniprojectideas.com/api/HotelBooking/';

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private isLocalStorageAvailable(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const testKey = '__test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  setItem(key: string, value: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    } else {
      console.warn('localStorage is not available.');
    }
  }

  getItem(key: string): string | null {
    if (this.isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    } else {
      console.warn('localStorage is not available.');
      return null;
    }
  }

  removeItem(key: string): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(key);
    } else {
      console.warn('localStorage is not available.');
    }
  }

  login(obj: any) {
    return this.http.post(`${this.apiEndPoint}Login`, obj);
  }

  getAllRooms() {
    return this.http.get(`${this.apiEndPoint}GetAllRooms`);
  }

  saveUpdateRoom(obj: any) {
    return this.http.post(`${this.apiEndPoint}AddUpdateBulkRooms`, obj);
  }

  deleteRoom(id: any) {
    return this.http.delete(
      `${this.apiEndPoint}DeleteRoomByRoomId?roomId=${id}`
    );
  }

  getAllCustomers() {
    return this.http.get(`${this.apiEndPoint}GetAllCustomers`);
  }

  getAllUsers() {
    return this.http.get(`${this.apiEndPoint}GetAllUsers`);
  }

  addUpdateUser(obj: any) {
    return this.http.post(`${this.apiEndPoint}AddUpdateUser`, obj);
  }

  deleteUser(id: any) {
    return this.http.delete(
      `${this.apiEndPoint}DeleteUserByUserId?userId=${id}`
    );
  }

  getBookingsByMonth(month: number) {
    return this.http.get(
      `${this.apiEndPoint}GetBookingsByMonth?month=${month}`
    );
  }

  createBooking(obj: any) {
    return this.http.post(`${this.apiEndPoint}BookRoom`, obj);
  }
  getAllBookings() {
    return this.http.get(`${this.apiEndPoint}GetAllBookings`);
  }

  getData() {
    return this.http.get(`${this.apiEndPoint}CardData`)
  }
  
}
