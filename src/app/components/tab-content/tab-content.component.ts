import { Component, OnInit, Input } from '@angular/core';
import { TabService } from 'src/app/services/tab-service.service';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input()
  index: number;

  tabSelected: boolean = false;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.onTabSelected.subscribe((selectedIndex: number) => {
      this.tabSelected = this.index === selectedIndex ? true : false;
    });
  }

}
