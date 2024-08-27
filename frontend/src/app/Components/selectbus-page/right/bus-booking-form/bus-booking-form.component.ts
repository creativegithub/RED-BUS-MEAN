import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../../../service/dataservice.service';

@Component({
  selector: 'app-bus-booking-form',
  templateUrl: './bus-booking-form.component.html',
  styleUrl: './bus-booking-form.component.css',
})
export class BusBookingFormComponent {
  @Input() operatorName: string = '';
  @Input() selectedseats: number[] = [];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busId: string = '';
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;

  passdetails: { name: string; age: string; gender: string }[] = [];
  passemail: string = '';
  passphn: string = '';
  passisbusiness: boolean = false;
  passinsurance: boolean = false;
  sendupdates: boolean = false;
  passiscovid: boolean = false;

  constructor(
    private router: Router,
    private dataservice: DataserviceService
  ) {}

  handlePassName(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    if (!this.passdetails[index]) {
      // If not, initialize it with default values
      this.passdetails[index] = { name: '', age: '', gender: '' };
    }
    this.passdetails[index].name = target.value;
  }

  handlePassAge(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    if (!this.passdetails[index]) {
      // If not, initialize it with default values
      this.passdetails[index] = { name: '', age: '', gender: '' };
    }
    this.passdetails[index].age = target.value;
  }

  handlePassGender(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    if (!this.passdetails[index]) {
      this.passdetails[index] = { name: '', age: '', gender: '' };
    }
    this.passdetails[index].gender = target.value;
  }

  handleProceedtoPay(): void {
    const routeParams = {
      operatorName: this.operatorName || '',
      selectedseats: JSON.stringify(this.selectedseats), // Serialize array as JSON string
      passemail: this.passemail || '',
      passphn: this.passphn || '',
      passisbusiness: this.passisbusiness.toString(), // Convert boolean to string
      passinsurance: this.passinsurance.toString(), // Convert boolean to string
      seatprice: this.seatprice || 0,
      busId: this.busId || '',
      busarrivaltime: this.busarrivaltime || 0,
      busdeparturetime: this.busdeparturetime || 0,
      passiscoviddonate: this.passiscovid.toString(), // Convert boolean to string
    };

    // console.log('Busbooking Id:', this.busId);
    this.dataservice.passobj(this.passdetails);
    this.dataservice.sendobj(this.routedetails);

    this.router.navigate(['/payment'], { queryParams: routeParams });
  }
}
