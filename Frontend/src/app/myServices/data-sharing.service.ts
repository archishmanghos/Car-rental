import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

    constructor() { }

    private sharedDataSubject = new BehaviorSubject<any>(null);
    sharedData$ = this.sharedDataSubject.asObservable();

    setSharedData(data: any): void {
        // console.log('Shared Data', data);
        
        this.sharedDataSubject.next(data);
    }
}
