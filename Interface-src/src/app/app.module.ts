import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { ValidateService } from './services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard} from './guards/auth.guard';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PatientComponent } from './components/patient/patient.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ReportsComponent } from './components/reports/reports.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { WriteMessageComponent } from './components/write-message/write-message.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';
import { AllReportsComponent } from './components/all-reports/all-reports.component';



const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'allUsers', component: AllUsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuard]},
  { path: 'administration', component: AdministrationComponent, canActivate: [AuthGuard]},
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  { path: 'writeMessage', component: WriteMessageComponent, canActivate: [AuthGuard]},
  { path: 'newPatient', component: NewPatientComponent, canActivate: [AuthGuard]},
  { path: 'newAppointment', component: NewAppointmentComponent, canActivate: [AuthGuard]},
  { path: 'allReports', component: AllReportsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CalendarComponent,
    MessagesComponent,
    PatientComponent,
    AdministrationComponent,
    ReportsComponent,
    AllUsersComponent,
    WriteMessageComponent,
    NewPatientComponent,
    NewAppointmentComponent,
    AllReportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgFlashMessagesModule.forRoot(),
    HttpClientModule,
    HttpModule
    ],
  providers: [ValidateService, AuthService, AuthGuard, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
