import { CardModule } from './../../shared/components/card/card.module';
import { PhotoMudule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';
@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent
  ],
  imports: [CommonModule, PhotoMudule, CardModule, DarkenOnHoverModule]
})
export class PhotosListModule {

}
