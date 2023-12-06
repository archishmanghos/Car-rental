import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../../myServices/data-sharing.service';

@Component({
    selector: 'app-more-details',
    templateUrl: './more-details.component.html',
    styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {
    cars: any[] = [];
    id: any;

    constructor(private route: ActivatedRoute, private dataSharingService: DataSharingService) { }

    ngOnInit(): void {
        console.log('Before Init', this.cars);
        
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.id -= 1;
        });

        this.dataSharingService.sharedData$.subscribe(data => {
            this.cars = data;
            console.log(this.cars);
        });

        console.log('After Init', this.cars);
    }
}






























// Good Afternoon Sir, I am facing a problem since yesterday over passing data over through routing in Angular. 
// I have a component, which has a button, which when clicked routes to a new url. I also have an array of objects which I also need to pass to the new url. I have used router.navigate in the parent component to pass the data as a state to new url.
// However, in the child component typescript, when I am trying to receive the data through ActivatedRoute snapshot, the data I am receiving is null.
// I have use both chatgpt and google, but couldn't find a solution
