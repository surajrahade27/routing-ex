import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private route:ActivatedRoute) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
        console.log(data.get('forgot_password'));
    });
  }

}
