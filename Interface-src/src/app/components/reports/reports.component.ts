import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  docNote: String;
  medicineNote: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }


onWrite() {
  const report = {
    docNote: this.docNote,
    medicineNote: this.medicineNote
  };

  this.authService.newReport(report).subscribe(data => {
    if (data.success) {
      this.flashMessage.showFlashMessage({
        messages: ['Report is now Registered'],
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
      this.router.navigate(['/reports']);
    }
  });

}
}
