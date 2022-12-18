import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat-service/chat.service';
import { DarkmodeServiceService } from 'src/app/services/darkmode/darkmode-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private darkModeService : DarkmodeServiceService, private chatService : ChatService) { }

  ngOnInit(): void {
  }

  toggleDarkMode(){
    this.darkModeService.toggle();
  }

  resetChat(){
    this.chatService.reset();
    console.log("reset")
  }
  
}
