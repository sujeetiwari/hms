import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

const Customer_Api='http://localhost:8282/api/'

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private http:HttpClient) { }

  getAllCustomer():Observable<Customer[]> {
    return this.http.get<Customer[]>(Customer_Api+'getAllCustomer');

  }
}
