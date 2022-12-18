import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { MessageModel } from 'src/app/components/message/message-model';
import { PostModel } from './post-model';
import { ResponseModel } from './res-model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public Messages : BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private httpClient : HttpClient) {
    let firstMessage = new MessageModel();

    firstMessage.isSentByUser = false;
    firstMessage.text = "Ciao, sono Zephyr. Sono un'assistente costruita utilizzando tensorflow, una libreria opensource per lavorare con l'intelligenza artificiale.";
    firstMessage.sentAt = new Date();

    this.Messages.next([...this.Messages.value, firstMessage]);
  }

  getMessages(){
    return this.Messages;
  }

  reset(){
    this.Messages.next([]);
  }

  sendMessage(text : string){
    let mess = new MessageModel();

    mess.text = text;
    mess.isSentByUser = true;
    mess.sentAt = new Date();

    this.Messages.next([...this.Messages.value, mess]);

    let postModel = new PostModel();

    postModel.message = text;

    this.httpClient.post<ResponseModel>("http://localhost:5000/zephyrbot", postModel).subscribe((res)=>{
      let newMessage = new MessageModel();

      newMessage.isSentByUser = false;
      newMessage.sentAt = new Date();
      newMessage.text = res.message;

      this.Messages.next([...this.Messages.value, newMessage]);
    });


  }

}
