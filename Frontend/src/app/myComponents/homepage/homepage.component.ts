import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  showPopup: boolean = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  toRent() {
    document.getElementById("rent")!.scrollIntoView();
  }

  toHome() {
    document.getElementById("home")!.scrollIntoView();
  }

  toAbout() {
    document.getElementById("about")!.scrollIntoView();
  }

  testimonials: any[] = [
    {
      name: "Person - 1",
      social: ["mangomanga", "mangomanga", "anjuCooks"],
      image: "testimonial/person1.jpg",
      quote: "Using cars.com for my recent trip was a breeze! The wide selection of well-maintained cars, easy booking process, and excellent customer service made my journey smooth and enjoyable. Highly recommended!"
    },
    {
      name: "Person - 2",
      social: ["lovesbi", "lovesbi", "baipoolLoves"],
      image: "testimonial/person2.avif",
      quote: "Highly impressed with the seamless experience provided by cars.com. Their user-friendly platform, prompt customer support, and well-maintained vehicles made my travel convenient and stress-free. Will definitely choose them again!"
    },
    {
      name: "Person - 3",
      social: ["loveTalibani", "loveTalibani", "beANandi"],
      image: "testimonial/person3.avif",
      quote: "Choosing cars.com for my road trip was a game-changer. Their top-notch service, reliable vehicles, and transparent pricing exceeded my expectations. A trustworthy companion for every traveler's journey. Kudos to the team!"
    }
  ]
}
