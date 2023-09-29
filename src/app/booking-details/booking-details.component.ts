import { Component,OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { Booking } from '../booking';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  id !:number;
hotel:Hotel=new Hotel();
booking:Booking=new Booking();
customer:Customer=new Customer();

constructor(private route:ActivatedRoute,private bookingService:BookingServiceService){}

ngOnInit(): void {
  
}

}
