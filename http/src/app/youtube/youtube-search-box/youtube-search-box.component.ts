import { 
    Component, 
    OnInit, 
    EventEmitter,
    ElementRef
} from '@angular/core';
import { SearchResult } from '../search-result';
import { YouTubeService } from '../youtube.service';

import { Observable } from 'rxjs';


@Component({
  selector: 'search-box',
  templateUrl: './youtube-search-box.component.html',
  styleUrls: ['./youtube-search-box.component.css'],
  outputs: ['loading', 'results']
})
export class YouTubeSearchboxComponent implements OnInit {
  loading: EventEmitter<boolean>  = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
    public youtube: YouTubeService,
    private el: ElementRef
  ) { 

  }

  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value)
    .filter((text: string) => text.length > 1)
    .debounceTime(250)
    .do(()=>this.loading.next(true))
    .map((query: string) => this.youtube.search(query))
    .switch()
    .subscribe(
      (results: SearchResult[]) => {
        this.loading.next(false);
        this.results.next(results);
      },

      (err: any) => {
        console.log(err);
        this.loading.next(false);
      },
      () => {
        this.loading.next(false);
      }
    );
  }

}
