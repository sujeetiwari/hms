import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-hotel',
  templateUrl: './register-hotel.component.html',
  styleUrls: ['./register-hotel.component.css']
})
export class RegisterHotelComponent {

  hotel:Hotel=new Hotel();
  constructor(private authService:AuthService,private router:Router){}

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

  

  onSubmit(){
    this.authService.getRegisterHotel(this.hotel).subscribe(data=>{
      console.log('SUCCESS',data);
      alert("Hotel Detail Saved Successful");
      this.router.navigate(['/hotel'])
    })
  }
  
}
