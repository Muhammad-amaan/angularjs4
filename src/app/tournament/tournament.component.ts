import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
//import { Timezone } from '../model/timezone.interface';
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




  constructor(public fb: FormBuilder) {}

    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });

    doLogin(event) {
        console.log(event);
        console.log(this.loginForm.value);
    }

  ngOnInit() {

  }

}
