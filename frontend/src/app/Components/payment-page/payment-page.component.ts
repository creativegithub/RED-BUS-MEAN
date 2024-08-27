import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from '../../service/dataservice.service';
import { HttpClient } from '@angular/common/http';
import { BusService } from '../../service/bus.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  passseatarray: number[] = [];
  passfare: number = 0;
  routedetails: any = {};
  busdeparturetime: number = 0;
  busarrivaltime: number = 0;
  customerId: any = {};
  operatorName: string = '';
  passengerDetails: any[] = [];
  email: string = '';
  phoneNumber: string = '';
  busId: string = '';
  departureDetails: any = {};
  arrivalDetails: any = {};
  duration: string = '';
  isBusinessTravel: boolean = false;
  isInsurance: boolean = false;
  isCovidDonated: boolean = false;

  bookingDate: string = new Date().toISOString().split('T')[0];

  constructor(
    private route: ActivatedRoute,
    private dataservice: DataserviceService,
    private http: HttpClient,
    private busservice: BusService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.operatorName = params['operatorName'] || '';
      this.passseatarray = params['selectedseats']
        ? JSON.parse(params['selectedseats'])
        : [];
      this.email = params['passemail'] || '';
      this.phoneNumber = params['passphn'] || '';
      this.isBusinessTravel = params['passisbusiness'] === 'true';
      this.isInsurance = params['passinsurance'] === 'true';
      this.passfare = +params['seatprice'] || 0;
      this.busId = params['busId'] || '';
      this.busarrivaltime = +params['busarrivaltime'] || 0;
      this.busdeparturetime = +params['busdeparturetime'] || 0;
      this.isCovidDonated = params['passiscoviddonate'] === 'true';

      // // Debugging
      // console.log('Params:', params);
      // console.log('Operator Name:', this.operatorName);
      // console.log('Seats Array:', this.passseatarray);
      // console.log('Booking Date:', this.bookingDate);
      // console.log('Departure Time:', this.busdeparturetime);
      // console.log('Arrival Time:', this.busarrivaltime);

      this.getLoggedInUser();
    });

    this.dataservice.currentdata.subscribe((data) => {
      this.routedetails = data;
      // console.log('Paymentpage:', this.routedetails);
    });

    this.dataservice.passdata.subscribe((data) => {
      this.passengerDetails = data;
      // console.log('Passenger:', this.passengerDetails);
    });
  }

  getLoggedInUser(): void {
    const loggedInUserJson = sessionStorage.getItem('Loggedinuser');
    if (loggedInUserJson) {
      this.customerId = JSON.parse(loggedInUserJson);
    } else {
      alert('Please login to continue');
    }
  }

  makePayment(): void {
    if (
      !this.routedetails.departureLocation ||
      !this.routedetails.arrivalLocation
    ) {
      console.error('Routing details are missing');
      return;
    }

    const myBooking = {
      customerId: this.customerId._id,
      passengerDetails: this.passengerDetails,
      email: this.customerId.email,
      phoneNumber: this.phoneNumber,
      fare: this.passfare,
      status: 'upcoming',
      busId: this.busId,
      bookingDate: new Date().toISOString().split('T')[0],
      seats: this.passseatarray,
      departureDetails: {
        city: this.routedetails.departureLocation.name,
        time: this.busdeparturetime,
        date: this.bookingDate,
      },
      arrivalDetails: {
        city: this.routedetails.arrivalLocation.name,
        time: this.busarrivaltime,
        date: this.bookingDate,
      },
      duration: this.routedetails.duration,
      isBusinessTravel: this.isBusinessTravel,
      isInsurance: this.isInsurance,
      isCovidDonated: this.isCovidDonated,
    };

    // console.log('MY BOOKING:', myBooking);

    this.busservice.addbusmongo(myBooking).subscribe({
      next: (response) => {
        console.log('Bus post request success', response);
      },
      error: (error) => {
        console.error('Post request failed', error);
      },
    });
  }
}
