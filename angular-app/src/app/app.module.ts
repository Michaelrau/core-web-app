import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { PanelsComponent } from './panels/panels.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NgxSlideshowModule } from 'ngx-slideshow';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BannerSlideshowComponent } from './banner-slideshow/banner-slideshow.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    PanelsComponent,
    MapComponent,
    FooterComponent,
    HeaderComponent,
    MainContentComponent,
    SlideshowComponent,
    GalleryComponent,
    CarouselComponent,
    BannerSlideshowComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgxSlideshowModule.forRoot(),
    NgxGalleryModule,
    NgxCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfNfKaxNbWxM_Xl9sJqnHb9Z3V4FyakRI'
    })    
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
