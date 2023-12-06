import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataSharingService } from '../../myServices/data-sharing.service';


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

    constructor(private router: Router, private dataSharingService: DataSharingService) { }

    onTurnDetailsOff() {
        console.log(this.showDetails);
        this.turnDetailsOff.emit();
    }

    detailsClick(id: number): void {
        // console.log(id);
        // console.log(this.cars);
        
        this.router.navigate(['/details', id]);
        this.dataSharingService.setSharedData(this.cars);
    }
}
