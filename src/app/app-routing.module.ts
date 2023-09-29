import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelComponent } from './hotel/hotel.component';
import { RegisterHotelComponent } from './register-hotel/register-hotel.component';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { BookingComponent } from './booking/booking.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'hotel',component:HotelComponent},
  {path:'booking',component:BookingComponent},
  {path:'registerHotel',component:RegisterHotelComponent},
  {path:'updateHotel/:id',component:UpdateHotelComponent},
  {path:'hotelDetails/:id',component:HotelDetailsComponent},
  {path:'customer',component:CustomerComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
