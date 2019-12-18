
import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StreamService } from '../stream.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var jQuery: any;

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  micToggle = true;
  constructor(
    private renderer2: Renderer2,
    @Inject (DOCUMENT) private _document,
    private streamService: StreamService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://sdk.scdn.co/spotify-player.js';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
  }

  toggleMic() {
    const message = `Your Microphone is ${this.micToggle ? 'On' : 'Off'}!`;
    this.snackBar.open(message, '', {
      duration: 2000,
    });
    this.micToggle = !this.micToggle;
  }
}
