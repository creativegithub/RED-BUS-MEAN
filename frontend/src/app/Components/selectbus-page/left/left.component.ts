import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrl: './left.component.css',
})
export class LeftComponent {
  amenityIcon: { [key: string]: string } = {
    wifi: 'wifi',
    waterBottle: 'local_drink',
    blankets: 'hotel',
    chargingPoint: 'battery_charging_full',
    movie: 'movie',
  };
  sidefiltervalues: any = {
    liveTracking: false,
    reschedulable: false,
    departureTime: {
      'before 6 am': false,
      '6 am to 12 pm': false,
      '12 pm to 6 pm': false,
      'after 6 pm': false,
    },
    busType: {
      seater: false,
      sleeper: false,
      ac: false,
      nonac: false,
    },
    arrivaltime: {
      'before 6 am': false,
      '6 am to 12 pm': false,
      '12 pm to 6 pm': false,
      'after 6 pm': false,
    },
    amenities: {
      wifi: false,
      waterBottle: false,
      blankets: false,
      chargingPoint: false,
      movie: false,
    },
  };
  getobjectkey(obj: any): string[] {
    return Object.keys(obj);
  }
  handleLivetrackingClick(): void {
    this.sidefiltervalues.liveTracking = !this.sidefiltervalues.liveTracking;
  }
  handleRescheduleClick(): void {
    this.sidefiltervalues.reschedulable = !this.sidefiltervalues.reschedulable;
  }
  handleDeparturetimeClick(event: any, name: string): void {
    this.sidefiltervalues.departureTime[name] = event.target.checked;
  }
  handleBustypeClick(event: any, name: string): void {
    this.sidefiltervalues.busType[name] = event.target.checked;
  }
  handleArrivaltimeClick(event: any, name: string): void {
    this.sidefiltervalues.arrivaltime[name] = event.target.checked;
  }
}
