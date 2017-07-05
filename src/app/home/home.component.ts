import { Component, OnInit } from '@angular/core';

import { GetDataService } from '../get-data.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
    providers: [GetDataService]
})
export class HomeComponent implements OnInit {

    errorMessage: string;
    timezones: any;
    mode = 'Observable';

    loader: boolean = true;

  constructor(public getRequest: GetDataService) { }

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
      console.log("working.....");
      this.loader=true;
      this.getRequest.getTimezone().subscribe(
          data => {
              this.timezones = data;
              console.log(data);
              this.loader=false;
          },
          err => {
              console.log(err);
              //this.isLoading = false;
          },
          () => console.log('Movie Search Complete')
      );
          // timezones => this.timezones,
          // error =>  this.errorMessage = <any>error);
  }

}
