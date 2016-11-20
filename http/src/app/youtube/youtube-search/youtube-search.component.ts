import { Component, OnInit } from '@angular/core';

import { SearchResult} from '../search-result';

@Component({
  selector: 'youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  loadingGif: string = ((<any>window).__karma__) ? '' : require('../../../resources/images/loading.gif');

  results: SearchResult[];

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: SearchResult[]): void{
    this.results = results;
    console.log("loadingGif", this.loadingGif);
    console.log("result", results);
  }

}
