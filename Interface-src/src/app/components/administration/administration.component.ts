import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
})


export class AdministrationComponent implements OnInit {
  users$: Object;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllUsers().subscribe(authService =>
     this.users$ = authService);
    }

}
