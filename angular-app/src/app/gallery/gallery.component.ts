import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Fade
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
    ];

    this.galleryImages = [
        {
            small: 'http://via.placeholder.com/350x150',
            medium: 'http://via.placeholder.com/350x150',
            big: 'http://via.placeholder.com/350x150'
        },
        {
            small: 'http://via.placeholder.com/350x150',
            medium: 'http://via.placeholder.com/350x150',
            big: 'http://via.placeholder.com/350x150'
        },
        {
            small: 'http://via.placeholder.com/350x150',
            medium: 'http://via.placeholder.com/350x150',
            big: 'http://via.placeholder.com/350x150'
        }
    ];
  }

}
