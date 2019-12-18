import { Component, OnInit } from '@angular/core';
import { StreamService } from './stream.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  micToggle = true;
  showFiller = false;
  constructor(
    private streamService: StreamService,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
