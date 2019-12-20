import { Component, OnInit } from '@angular/core';
import { StreamService } from '../stream.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private streamService: StreamService,
    ) { }

  ngOnInit() {
    this.streamService.login().subscribe(data =>
      console.log(data));
  }

}
