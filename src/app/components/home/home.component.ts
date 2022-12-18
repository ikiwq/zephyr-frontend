import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat-service/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public chatForm = new FormGroup({
    message: new FormControl('', [Validators.required])
  })

  constructor(private chatService : ChatService) { }

  sendMessage() : void {
    let message = this.chatForm.get('message')?.value;

    if(message != null){
      this.chatService.sendMessage(message);
      this.chatForm.get('message')?.reset();
    }
  
  }

  ngOnInit(): void {
  }

}
