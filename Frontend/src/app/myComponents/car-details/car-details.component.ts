import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent {
  @Input() cars: any[] = [];
  @Input() index: any;
  @Input() showDetails: boolean = false;
  @Output() turnDetailsOff = new EventEmitter<void>();

  onTurnDetailsOff() {
    console.log(this.showDetails);
    
    this.turnDetailsOff.emit();
  }
}
