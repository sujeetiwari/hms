import { Component } from '@angular/core';
import { Booking } from '../booking';
import { BookingServiceService } from '../booking-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookings:Booking[]=[];

  constructor(private bookingService:BookingServiceService,
    private router :Router
    ){}
   ngOnInit(): void {
   
  this.getBooking(); 
   }
   private getBooking(){
    this.bookingService.getAllBooking().subscribe((data)=>{
      this.bookings=data;
      });
   }

}
