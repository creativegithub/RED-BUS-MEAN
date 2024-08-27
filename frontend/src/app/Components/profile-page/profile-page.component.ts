import { Component } from '@angular/core';
import { Booking } from '../../model/booking-model';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  selectedItems: string = 'trips';
  currentCustomer: any = [];
  currentName: string = '';
  currentEmail: string = '';
  currentCustomerGender: string = '';

  mytrip: Booking[] = [];

  handleListitemClick(selected: string): void {
    this.selectedItems = selected;
  }

  constructor(private busbooking: BusService) {}

  ngOnInit() {
    // Simulate fetching data from a service
    this.currentCustomer = sessionStorage.getItem('Loggedinuser');
    const user = JSON.parse(this.currentCustomer);

    this.currentName = user.name;
    this.currentEmail = user.email;
    this.currentCustomerGender = user.gender;
    this.busbooking.getbusmongo(user._id).subscribe((response: any) => {
      this.mytrip = response;
      console.log(this.mytrip);
    });
  }
}
