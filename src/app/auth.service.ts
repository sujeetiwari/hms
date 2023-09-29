import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

const Hotel_Api='http://localhost:8282/api/'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getAllHotel():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(Hotel_Api+'getAllHotel')
  }

  getRegisterHotel(hotel:Hotel):Observable<Object>{
    return this.http.post<any>(Hotel_Api+'saveHotel',hotel);
  }
  
  
  updateHotel(hId: number, hotel: Hotel): Observable<Object>
  {
    return this.http.put(`${Hotel_Api}`+'updateHotel/'+`${hId}`, hotel);
  }

  getHotelById(id: number): Observable<Hotel>
  {
    return this.http.get<Hotel>(`${Hotel_Api}`+'getHotelById/'+`${id}`);
  }

  deleteHlById(id: number): Observable<Object>
  {
    return this.http.delete(`${Hotel_Api}`+'deleteHlById/'+`${id}`);
  }
}
