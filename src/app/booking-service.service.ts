import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Observable } from 'rxjs';

const Booking_Api='http://localhost:8282/api/'


@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {


  constructor(private http:HttpClient) { }
  getAllBooking():Observable<Booking[]>{
    return this.http.get<Booking[]>(Booking_Api+'getAllBooking')
  }
}
