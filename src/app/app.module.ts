import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageService } from './service/image.service';
import { ImageFilterPipe } from './service/filter.pipe';
import { AppRoutes } from '../routes';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        GalleryComponent,
        ImageDetailComponent,
        ImageFilterPipe
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes)
    ],
    providers: [ImageService, ImageFilterPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
