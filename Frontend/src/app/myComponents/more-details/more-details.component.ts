import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-more-details',
    templateUrl: './more-details.component.html',
    styleUrls: ['./more-details.component.css']
})
export class MoreDetailsComponent {
    cars: any;
    id: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        this.route.data.subscribe(aata => {
            console.log('Route Data:', aata);
            // const jsonData = data['state']?.data;
            // console.log(jsonData);
            
            // if (jsonData) {

            // }
        });

        console.log('Snapshot:', this.route.snapshot);
        console.log('Data:', this.route.snapshot?.data);
        console.log('State:', this.route.snapshot?.data['state']);
        const data = this.route.snapshot?.data['state']?.data;
        console.log('JsonData:', data);
        
        if (data) {
            this.cars = data['state']?.data;
            console.log(this.cars);
        }
    }
}






























// Good Afternoon Sir, I am facing a problem since yesterday over passing data over through routing in Angular. 
// I have a component, which has a button, which when clicked routes to a new url. I also have an array of objects which I also need to pass to the new url. I have used router.navigate in the parent component to pass the data as a state to new url.
// However, in the child component typescript, when I am trying to receive the data through ActivatedRoute snapshot, the data I am receiving is null.
// I have use both chatgpt and google, but couldn't find a solution
