import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-drawer',
  templateUrl: './form-drawer.component.html',
  styleUrl: './form-drawer.component.css',
})
export class FormDrawerComponent {
  @Input() operatorName: string = '';
  @Input() selectedseats: number[] = [];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busId: string = '';
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;

  formdrawerstate: boolean = false;
  sidenavopened = false;

  toogledrawer(open: boolean): void {
    this.formdrawerstate = open;
  }
}
