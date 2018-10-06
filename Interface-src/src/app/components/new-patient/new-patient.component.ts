import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {
  name: String;
  dateOfBirth: Date;
  sex: String;
  email: String;
  licenseId: String;
  contact: String;

  constructor(
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private router: Router,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  onCreatePatient() {
    const patient = {
      name: this.name,
      dateOfBirth: this.dateOfBirth,
      sex: this.sex,
      email: this.email,
      licenseId: this.licenseId,
      contact: this.contact
    };

    this.authService.registerPatient(patient).subscribe(data => {
      if (data.success) {
        this.flashMessage.showFlashMessage({
          messages: ['Patient is now Registered'],
          dismissible: true,
          timeout: 1000,
          type: 'success'
        });
        this.router.navigate(['/calendar']);
      } else {
        this.flashMessage.showFlashMessage({
          messages: ['Something went wrong'],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['/newPatient']);
      }
    });
  }
}
