import { 
    Injectable, 
    Inject 
} from '@angular/core';

import { 
    Http, 
    Response 
} from '@angular/http';

import { 
    // YouTubeInjectables, 
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from './youtube.injectables';

import { Observable } from 'rxjs';

import { SearchResult } from './search-result';

@Injectable()
export class YouTubeService {

  constructor(public http: Http,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string) { }

  search(query: string):Observable<SearchResult[]>{
    let param: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResult=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${param}`;

    return this.http.get(queryUrl).map((response:Response)=>{
      return (<any>response.json()).items.map(item=>{
        console.log("raw item", item);
        return new SearchResult({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.high.url
        });
      });
    });

  }

}
