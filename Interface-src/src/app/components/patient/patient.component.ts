import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
patients: Object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.allPatientsName().subscribe(authService =>
    this.patients = authService);
  }

}
