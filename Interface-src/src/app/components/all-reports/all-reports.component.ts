import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.css']
})
export class AllReportsComponent implements OnInit {
  reports: Object;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.allReports().subscribe(data =>
      this.reports = data);
  }

}
