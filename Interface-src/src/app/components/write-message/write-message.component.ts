import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.css']
})
export class WriteMessageComponent implements OnInit {
  note: String;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private flashmessage: NgFlashMessageService
  ) { }

  ngOnInit() {
  }

  onCreate() {
    const message = {
      note: this.note
      };
    this.authservice.newMessage(message).subscribe(data => {
      if (data.success) {
        this.flashmessage.showFlashMessage({
          messages: ['your messages has been sent'],
          dismissible: true,
          timeout: 3000,
          type: 'success'
        });
        this.router.navigate(['/messages']);
      }
    });
  }
}
