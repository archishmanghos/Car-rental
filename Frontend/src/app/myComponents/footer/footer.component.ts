import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    faTwitter = faTwitter;
    faYoutube = faYoutube;
    faInstagram = faInstagram;
    faFacebook = faFacebook;
    faPhone = faPhone;
    faEnvelope = faEnvelope;
}
