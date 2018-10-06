import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {
  dateOfAppointment: String;
  title: String;
  patient: String;
  status: String;
  comment: String;
  patients: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private validateService: ValidateService,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.authService.allPatientsName().subscribe(authService =>
      this.patients = authService);
  }

  onCreateAppointment() {
    const appointment = {
      dateOfAppointment: this.dateOfAppointment,
      title: this.title,
      patient: this.patient,
      status: this.status,
      comment: this.comment
    };
    console.log('patient');
    this.authService.newAppointment(appointment).subscribe(data => {
      if (data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['An Appointment was created'],
          dismissible: true,
          timeout: 1000,
          type: 'success'
        });
        this.router.navigate(['/calendar']);
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['Something went wrong'],
          dismissible: true,
          timeout: 1000,
          type: 'danger'
        });
        this.router.navigate(['/newAppointment']);
      }
    });
  }

}
