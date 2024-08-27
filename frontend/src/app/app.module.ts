import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { DialogComponent } from './Components/landing-page/dialog/dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { LeftComponent } from './Components/selectbus-page/left/left.component';
import { RightComponent } from './Components/selectbus-page/right/right.component';
import { HeaderComponent } from './Components/selectbus-page/header/header.component';
import { SelectbusPageComponent } from './Components/selectbus-page/selectbus-page.component';
import { MatIconModule } from '@angular/material/icon';
import { SortingBarComponent } from './Components/selectbus-page/right/sorting-bar/sorting-bar.component';
import { BusBoxComponent } from './Components/selectbus-page/right/bus-box/bus-box.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { BottomTabComponent } from './Components/selectbus-page/right/bus-book/bottom-tab/bottom-tab.component';
import { ViewSeatsComponent } from './Components/selectbus-page/right/view-seats/view-seats.component';
import { FormDrawerComponent } from './Components/selectbus-page/right/form-drawer/form-drawer.component';
import { SmallSeatsComponent } from './Components/selectbus-page/right/small-seats/small-seats.component';
import { BusBookingFormComponent } from './Components/selectbus-page/right/bus-booking-form/bus-booking-form.component';
import { PaymentPageComponent } from './Components/payment-page/payment-page.component';
import { ProfilePageComponent } from './Components/profile-page/profile-page.component';
import { MyTripComponent } from './Components/profile-page/my-trip/my-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    DialogComponent,
    LeftComponent,
    RightComponent,
    HeaderComponent,
    SelectbusPageComponent,
    SortingBarComponent,
    BusBoxComponent,
    BottomTabComponent,
    ViewSeatsComponent,
    FormDrawerComponent,
    SmallSeatsComponent,
    BusBookingFormComponent,
    PaymentPageComponent,
    ProfilePageComponent,
    MyTripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
