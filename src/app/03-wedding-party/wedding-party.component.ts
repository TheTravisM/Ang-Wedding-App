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

  constructor() {}

  ngOnInit() {}

}
