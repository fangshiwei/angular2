import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result';

@Component({
  selector: 'search-result',
  templateUrl: './youtube-search-result.component.html',
  styleUrls: ['./youtube-search-result.component.css'],
  inputs:[ 'result' ]
})
export class YouTubeSearchResultComponent implements OnInit {
  result: SearchResult;
  constructor() { }

  ngOnInit() {
  }

}
