import { Component } from '@angular/core';
import { VolumeActions } from './models/volume-actions.enum';
import { SeekActions } from './models/seek-actions.enum';
import { MouseMoveActions } from './models/mouse-move-actions.enum';
import { MediaStatus } from './models/media-status.enum';

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

  volumeAction(action: string) {
    if (action === VolumeActions.UP) {
      console.log('Volume action up');
    } else if (action === VolumeActions.DOWN) {
      console.log('Volume action down');
    }
  }

  seekAction(action: string) {
    if (action === SeekActions.FORWARD) {
      console.log('Seek action forward');
    } else if (action === SeekActions.REWIND) {
      console.log('Seek action rewind');
    }
  }

  mouseMoveAction(action: string) {
    switch (action) {
      case MouseMoveActions.UP:
        console.log('Mouse move action up');
        break;
      case MouseMoveActions.DOWN:
        console.log('Mouse move action down');
        break;
      case MouseMoveActions.LEFT:
        console.log('Mouse move action left');
        break;
      case MouseMoveActions.RIGHT:
        console.log('Mouse move action right');
        break;
    }
  }

  mouseSelectAction() {
    console.log('Mouse select action');
  }
}