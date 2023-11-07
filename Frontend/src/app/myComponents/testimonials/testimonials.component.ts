import { Component, Input, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Swiper from 'swiper';
// import SwiperC

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
    faQuoteLeft = faQuoteLeft;
    faQuoteRight = faQuoteRight;
    faTwitter = faTwitter;
    faInstagram = faInstagram;
    faYoutube = faYoutube;

    @Input() testimonials: any[] = [];

    swiper: Swiper | undefined;

    ngOnInit(): void {
      this.swiper=new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });
    }


}
