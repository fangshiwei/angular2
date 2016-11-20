import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';

// import { YoutobeInjectables } from './youtobe/youtobe.injectables';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL} from './youtube/youtube.injectables';
import { YouTubeService } from './youtube/youtube.service';
import { YouTubeSearchboxComponent } from './youtube/youtube-search-box/youtube-search-box.component';
import { YouTubeSearchResultComponent } from './youtube/youtube-search-result/youtube-search-result.component';
import { YouTubeSearchComponent } from './youtube/youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YouTubeSearchboxComponent,
    YouTubeSearchResultComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // YoutobeInjectables
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL },
    { provide: YouTubeService, useClass: YouTubeService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
