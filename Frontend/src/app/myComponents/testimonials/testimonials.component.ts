import { Component, Input, OnInit } from '@angular/core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
    faQuoteLeft = faQuoteLeft;
    faQuoteRight = faQuoteRight;
    faTwitter = faTwitter;
    faInstagram = faInstagram;
    faYoutube = faYoutube;

    @Input() testimonials: any[] = [];
}
