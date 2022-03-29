import { NotfoundComponent } from './errors/notfound/notfound.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PhotosListResolver } from './photos/photo-list/photos-list.resolver';
import { SigninComponent } from './home/signin/signin.component';

const routes: Routes = [

  { path: '', component: SigninComponent },

  { path: 'user/:userName', component: PhotoListComponent, resolve: {
    photos: PhotosListResolver
  } },
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotfoundComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
