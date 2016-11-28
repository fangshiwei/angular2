import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { ArticleComponent } from './article/article.component';
import { TrackComponent } from './track/track.component';
import { AlbumComponent } from './album/album.component';


const routesMusic: Routes = [
    {path: '', redirectTo: 'search', pathMatch: 'full'},
    {path: 'search', component: SearchComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'artist/:id', component: ArtistComponent},
    {path: 'track/:id', component: TrackComponent},
    {path: 'album/:id', component: AlbumComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routesMusic);