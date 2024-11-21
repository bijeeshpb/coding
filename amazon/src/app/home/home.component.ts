import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  details:any

  constructor(private data:DataService){}

  ngOnInit(){

    this.data.getdata().subscribe((res)=>{
      
   
   this.details=res
     
    });


  }
  

}
