import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { MessageModel } from '../message/message-model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public messages : MessageModel[] = [];

  constructor(private chatService : ChatService) { 

  }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((msgs)=> this.messages = msgs);
  }

}
