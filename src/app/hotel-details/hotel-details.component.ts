import { Component } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent {

  id!:number;
  hotel:Hotel=new Hotel();
  
  constructor(private route:ActivatedRoute,
    private authService:AuthService){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.authService.getHotelById(this.id).subscribe(data=>{
      this.hotel=data;
    })
  }
  
  
}
