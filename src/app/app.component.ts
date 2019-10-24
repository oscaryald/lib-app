import { Component, OnInit } from '@angular/core';
import { ListService } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  list: string[] = [];

  constructor(private svc$: ListService) {}

  ngOnInit() {
    this.svc$.list.subscribe(value => (this.list = [...this.list, value]));
  }
}
