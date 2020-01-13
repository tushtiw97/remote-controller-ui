import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  public onTabSelected: EventEmitter<number> = new EventEmitter();

  // private URLPrefix = 'http://localhost:8080';
  private URLPrefix = '';

  private mouseMoveActionURL = this.URLPrefix + '/controller/mouseMoveAction?action=';
  private seekActionURL = this.URLPrefix + '/controller/seekAction?action=';
  private volumeActionURL = this.URLPrefix + '/controller/volumeAction?action=';
  private toggleMediaStatusURL = this.URLPrefix + '/controller/play-pause-toggle';

  constructor(private http: HttpClient) { }

  setActiveTab(index: number) {
    this.onTabSelected.emit(index);
  }

  mouseAction(action: string) {
    return this.http.get(this.mouseMoveActionURL + action);
  }

  seekAction(action: string) {
    return this.http.get(this.seekActionURL + action);
  }

  volumeAction(action: string) {
    return this.http.get(this.volumeActionURL + action);
  }

  toggleMediaStatus() {
    return this.http.get(this.toggleMediaStatusURL);
  }
}
