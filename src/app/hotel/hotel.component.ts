import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent  implements OnInit{

  
  constructor(private authService:AuthService,private router:Router){}
  
  hotels:Hotel[] | undefined;
  

  ngOnInit(): void {
    this.getAllHotel();
  }
  getAllHotel(){
    this.authService.getAllHotel().subscribe(
      data=>{
        this.hotels=data;
      }
    )
  
  }
  updateHotel(id: number)
  {
    this.router.navigate(['updateHotel',id]);
  }

  hotelDetails(id:number){
    this.router.navigate(['hotelDetails',id]);
   }
   
  deleteHotel(id:number){
    this.authService.deleteHlById(id).subscribe(
      data=>
      {
        console.log(data);
        alert("Hotel with id "+id+" has been deleted!");
        window.location.reload();
      }
    );
  
  }
}
