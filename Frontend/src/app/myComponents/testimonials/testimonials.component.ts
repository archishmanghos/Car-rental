import { Component } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
    faQuoteLeft = faQuoteLeft;
}
