import { Component ,OnInit} from '@angular/core';
import { Customer } from '../customer';
import { CustomerserviceService } from '../customerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
customers:Customer[]=[];

constructor(private customerService:CustomerserviceService,private route:Router){}

ngOnInit(): void {
  this.getAllCustomer();
}

getAllCustomer(){
  this.customerService.getAllCustomer().subscribe((data)=>{
    this.customers=data;
   } )
}
}
