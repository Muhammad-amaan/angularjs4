import { Component, OnInit,Input } from '@angular/core';
import { Timezone } from '../model/timezone';
import { PostDataService } from '../post-data.service';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
   providers: [PostDataService]
})
export class TournamentComponent implements OnInit {

  @Input() timezone:Timezone;
  responseStatus:Object= [];
  status:boolean ;

  constructor(public postRequest: PostDataService) { }


   createTimezone()
   {
     console.log("submit Post click happend " + this.timezone.timezone);
     //this.postRequest.postTimezone();
     this.postRequest.postTimezone(this.timezone).subscribe(
         data => console.log(this.responseStatus = data),
         err => console.log(err),
         () => console.log('Request Completed')
     );

     this.status = true;
   }


  ngOnInit() {
    this.timezone = new Timezone();
    this.timezone.timezone = "";
  }

}
