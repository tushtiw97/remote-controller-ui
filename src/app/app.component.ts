import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentMediaStatus: string = MediaStatus.PAUSED;

  tabs: Array<string> = ['Keyboard Controls', 'Mouse Controls'];

  toggleMediaStatus() {
    this.currentMediaStatus = this.currentMediaStatus === MediaStatus.PAUSED ? MediaStatus.PLAYING : MediaStatus.PAUSED;
  }

  lel(event: MouseEvent) {
    event.preventDefault();
    console.log('mouse down');
  }

  lol(event: MouseEvent) {
    event.preventDefault();
    console.log('mouse up');
  }
}

export enum MediaStatus {
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED'
}
