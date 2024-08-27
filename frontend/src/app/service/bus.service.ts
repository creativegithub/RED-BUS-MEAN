import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../model/bus-model';
import { url } from '../config';
import { Booking } from '../model/booking-model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private busbookapi: string = url + 'booking/';
  private apiurl: string = url + 'routes/';
  constructor(private http: HttpClient) {}

  GETBUSDETAILS(
    departure: string,
    arrival: string,
    date: string
  ): Observable<Bus[]> {
    const url = `${this.apiurl}${departure}/${arrival}/${date}`;
    // console.log('Request url:', url);
    // console.log('Departure:', departure, 'Arrival:', arrival, 'Date:', date);
    return this.http.get<Bus[]>(url);
  }

  addbusmongo(myBooking: any): Observable<Booking> {
    const busbook: Booking = {
      customerId: myBooking.customerId,
      passengerDetails: myBooking.passengerDetails,
      email: myBooking.email,
      phoneNumber: myBooking.phoneNumber,
      fare: myBooking.fare,
      status: myBooking.status,
      seats: myBooking.seats,
      departureDetails: myBooking.departureDetails,
      arrivalDetails: myBooking.arrivalDetails,
      duration: myBooking.duration,
      isBusinessTravel: myBooking.isBusinessTravel,
      isInsurance: myBooking.isInsurance,
      isCovidDonated: myBooking.isCovidDonated,
      bookingDate: myBooking.bookingDate,
      busId: myBooking.busId,
    };
    return this.http.post<Booking>(this.busbookapi, busbook);
  }

  getbusmongo(id: string): Observable<Booking[]> {
    const url = `${this.busbookapi}${id}`;
    return this.http.get<Booking[]>(url);
  }
}
