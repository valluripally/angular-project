import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  recipe =false;
  shopping=false;
listenToHeader(name:String){

  if(name ==="Recipe")
 {
  this.recipe =true;
  this.shopping =false;
 } 
   if(name ==="Shopping")
  {
    this.shopping =true;
    this.recipe =false;
  }
 
}

}
