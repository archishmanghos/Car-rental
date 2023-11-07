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

  testimonials: any[] = [
    {
      name: "Anju",
      social: ["mangomanga", "mangomanga", "anjuCooks"],
      image: "testimonial/person1.jpg",
      quote: "ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae aperiam veritatis eius voluptate excepturi a. Enim quaerat exercitationem natus distinctio? Quibusdam amet laudantium ratione quia provident magnam inventore voluptatibus pariatur nemo harum sit fuga laboriosam ipsum iste, aut autem."
    },
    {
      name: "Baipool",
      social: ["lovesbi", "lovesbi", "baipoolLoves"],
      image: "testimonial/person2.avif",
      quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum praesentium molestias esse quas eos voluptatum dolore voluptas accusamus temporibus qui quidem, dolores tenetur nulla fuga suscipit repudiandae et laboriosam enim. Aliquid sed soluta est natus? Ab deserunt unde saepe ratione."
    },
    {
      name: "beANandi",
      social: ["loveTalibani", "loveTalibani", "beANandi"],
      image: "testimonial/person3.avif",
      quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic animi distinctio quidem eveniet odit dolorem placeat nostrum vel in eligendi exercitationem porro iste dolor, minima veritatis cupiditate soluta tenetur impedit possimus reprehenderit dignissimos molestiae! Sit quae tenetur inventore eum!"
    }
  ]
}
