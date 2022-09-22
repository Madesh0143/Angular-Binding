import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_binding';

    fontSize:number;
 
    fontFamily:string;
    fontColor:string;
    
    

    constructor()
    {
      this.fontSize=16;
      this.fontFamily = "sans-serif"
      this.fontColor =""
      
    }
    increase()
    {
      this.fontSize = this.fontSize +1;
    }
    decrease()
    {
      this.fontSize=this.fontSize -1;
    }

    reset()
    {
      this.fontSize=16;
      this.fontFamily="sans-serif";
      this.fontColor ="";
      
    }

    font() 
    {
      
      this.fontFamily = " monospace";  
     }
    color()
    {
      this.fontColor = "red";
    }
   

 
    
  
   
    
    









}
