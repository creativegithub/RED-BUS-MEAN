import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-seats',
  templateUrl: './view-seats.component.html',
  styleUrl: './view-seats.component.css',
})
export class ViewSeatsComponent {
  @Input() operatorName: string = '';
  @Input() filledseats: number[] = [];
  @Input() seatprice: number = 0;
  @Input() routedetails: any;
  @Input() busId: string = ' ';
  @Input() busarrivaltime: number = 0;
  @Input() busdeparturetime: number = 0;

  selectedseats: number[] = [];
  boardanddrop: boolean = false;

  generatearray(length: number): number[] {
    return Array.from({ length }, (_, index) => index + 1);
  }

  handleSelectedSeats(seatno: number): void {
    if (this.selectedseats.includes(seatno)) {
      this.selectedseats = this.selectedseats.filter((item) => item !== seatno);
    } else {
      this.selectedseats.push(seatno);
    }
  }
  handleBoardDrop(): void {
    this.boardanddrop = !this.boardanddrop;
  }
}
