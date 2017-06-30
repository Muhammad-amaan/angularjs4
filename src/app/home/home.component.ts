import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  title = 'angular 4 with jquery';
  toggleTitle(){
    //$('.title').slideToggle(); //
    //$('.navbar').on('click', function(){
      if( $('#sidebar').is(':visible') ) {
        $('#sidebar').animate({ 'width': '0px' }, 300, function(){
          $('#sidebar').hide();
        });
        $('#main-content').animate({ 'margin-left': '0px' }, 300);
      }
      else {
        $('#sidebar').show();
        $('#sidebar').animate({ 'width': '250px' }, 300);
        $('#main-content').animate({ 'margin-left': '250px' }, 300);
      }
    //});
  }



  ngOnInit() {
  }

}
