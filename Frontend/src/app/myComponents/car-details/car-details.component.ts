import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent {
    constructor(private router: Router) { }

    @Input() cars: any[] = [];
    @Input() index: any;
    @Input() showDetails: boolean = false;
    @Output() turnDetailsOff = new EventEmitter<void>();

    onTurnDetailsOff() {
        console.log(this.showDetails);
        this.turnDetailsOff.emit();
    }

    detailsClick(id: number): void {
        console.log(id);
        console.log(this.cars[id]);
        
        this.router.navigate(['/details', id], {state: {data: this.cars[id]}});
    }
}
