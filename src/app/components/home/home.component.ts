import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    var o = {
      john: 12,
      brian: true,
      doe: 'hi',
      fred: false
   };  
    this.helloProperties(o);
    
    
   }

  ngOnInit(): void {
  }
  helloProperties(obj) {
    let arr = [];
    let res = Object.keys(obj).map(function (key){
      return [key];
    });
  
    for(let i = 0; i<res.length; i++){
      arr.push("Hello-"+res[i]);
      console.log(arr[0]);
    }
  
  }



}
