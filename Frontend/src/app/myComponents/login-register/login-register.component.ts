import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleXmark, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  @Input() showPopup: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  faCircleXmark = faCircleXmark;
  faEyeSlash = faEyeSlash;
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;

  onClosePopup() {
    this.closePopup.emit();
  }

  ngAfterViewInit() {
    (document.querySelector('#myTab') as HTMLElement).addEventListener('click', (event) => {
      event.preventDefault();
      const tab = event.target as HTMLElement;
      if (tab.getAttribute('data-toggle') === 'tab') {
        const target = tab.getAttribute('href');
        
        if (target) {
          (document.querySelector('.tab-pane.show') as HTMLElement).classList.remove('show');
          (document.querySelector('.tab-pane.active') as HTMLElement).classList.remove('active');
          (document.querySelector(tab.getAttribute('href') as string) as HTMLElement).classList.add('active');
          (document.querySelector(tab.getAttribute('href') as string) as HTMLElement).classList.add('show');
        }
      }
    });
  }
}
