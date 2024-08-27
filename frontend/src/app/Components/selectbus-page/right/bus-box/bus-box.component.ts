import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bus-box',
  templateUrl: './bus-box.component.html',
  styleUrl: './bus-box.component.css',
})
export class BusBoxComponent {
  @Input() rating: number[] = [];
  @Input() operatorName: string = '';
  @Input() busType: string = '';
  @Input() departureTime: string = '';
  @Input() liveTracking: number = 0;
  @Input() reschedulable: number = 0;
  @Input() filledseats: any[] = [];
  @Input() routedetails: any;
  @Input() busId: string = '';

  avgrating: number = 0;
  totalreview: number = 0;
  seatprice: number = 0;
  bustypename: string = '';
  busdeparturetime: number = 0;
  busarrivaltime: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.rating.forEach((item, index) => {
      this.avgrating += item;
      this.totalreview += item;
    });

    if (this.totalreview === 0) {
      this.totalreview = 1;
    }

    this.avgrating = +this.avgrating / this.totalreview;

    if (this.busType === 'standard') {
      this.seatprice = (50 * Math.floor(this.routedetails.duration)) / 2;
      this.bustypename = 'standard';
    } else if (this.busType === 'sleeper') {
      this.seatprice = (100 * Math.floor(this.routedetails.duration)) / 2;
      this.bustypename = 'sleeper';
    } else if (this.busType === 'A/C Seater') {
      this.seatprice = (125 * Math.floor(this.routedetails.duration)) / 2;
      this.bustypename = 'A/C Seater';
    } else {
      this.seatprice = (75 * Math.floor(this.routedetails.duration)) / 2;
      this.bustypename = 'Non - A/C';
    }
    const numericvalue = parseInt(this.departureTime, 10);
    this.busdeparturetime = numericvalue;
    this.busarrivaltime = (numericvalue + this.routedetails.duration) % 24;
  }
}
