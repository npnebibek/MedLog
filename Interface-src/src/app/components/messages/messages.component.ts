import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Object;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllMessages().subscribe(authService =>
    this.messages = authService);
    }
  }


