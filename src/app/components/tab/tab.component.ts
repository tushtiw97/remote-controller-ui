import { Component, OnInit, Input } from '@angular/core';
import { TabService } from 'src/app/services/tab-service.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input()
  header: string;

  @Input()
  index: number;

  tabSelected: boolean = false;

  constructor(private tabService: TabService) { }

  ngOnInit() {
    this.tabService.onTabSelected.subscribe((selectedIndex: number) => {
      this.tabSelected = selectedIndex === this.index ? true : false;
    });
  }

  setActiveTab() {
    this.tabService.setActiveTab(this.tabSelected ? undefined : this.index);
  }

}
