import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent {
  hotel:Hotel=new Hotel();
  id!:number;
  constructor(private authService:AuthService,private router:Router,private route :ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   this.authService.getHotelById(this.id).subscribe(
    data=>
    {
      this.hotel = data;
    }
   );
  }
  onSubmit()
      {
          this.authService.updateHotel(this.id, this.hotel).subscribe(
              data=>
              {
                alert("Hotel details updated successfully!");
                this.router.navigate(['/hotel']);
              }
          );
      }
  form=new FormGroup({
    hotelName: new FormControl("",[Validators.required, Validators.minLength(3),
       Validators.maxLength(20)]),
      location:new FormControl("",[Validators.required,Validators.minLength(3),
        Validators.maxLength(20)]),
        rating:new FormControl("",[Validators.required])
      });

      get f(){
        return this.form.controls;
      }

  

    
}
