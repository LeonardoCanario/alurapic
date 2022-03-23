import { NgModule } from "@angular/core";

import { PhotoMudule } from "./photo/photo.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotosListModule } from "./photo-list/photo-list.module";

@NgModule({
  imports: [PhotoMudule, PhotoFormModule, PhotosListModule]
})
export class PhotosModule { }
