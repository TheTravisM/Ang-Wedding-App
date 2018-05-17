import { Component, OnInit } from '@angular/core';
import { Party } from './wedding-party-data';

@Component({
  selector: 'app-wedding-party',
  templateUrl: './wedding-party.component.html',
  styleUrls: ['./wedding-party.component.scss']
})
export class WeddingPartyComponent implements OnInit {
  bridesmaids: Array<Object> = Party.bridesmaids;
  groomsmen: Array<Object> = Party.groomsmen;

  offset = 100;
  screen_lg = '1200px';
  screen_md = '992px';
  defaultImage = 'https://www.placecage.com/100/100';
  image1 = 'http://fillmurray.com/200/300';
  image2 = 'http://fillmurray.com/400/400';
  image3 = 'http://fillmurray.com/600/600';

  constructor() {}

  ngOnInit() {}

}
