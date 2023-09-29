import { Component,OnInit ,Input} from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  ngOnInIt():void{}

  showNavigationArrows = false;
	showNavigationIndicators = false;
  images=[
    "https://assets.architecturaldigest.in/photos/600838c57a5614cb87e4a051/16:9/w_1600,c_limit/Umaid-Bhawan-1366x768.jpg" ,  
    "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/06/Taj-Mahal-Palace-Mumbai.jpg",
    "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/06/Dining-at-The-Leela-Palace-Udaipur.jpg" ,
    "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/06/Rambagh-Palace-Suite-Jaipur.jpg",
    "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/04/Oberoi-Amarvilas-Spa-Agra.jpg" 
  ]

	// constructor(config: NgbCarouselConfig) {
	// 	config.showNavigationArrows = true;
	// 	config.showNavigationIndicators = true;
	
  // }
  

}
