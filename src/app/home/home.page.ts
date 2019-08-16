import { Component } from '@angular/core';
import { WebsocketService } from '../service/websocket.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private ws:WebsocketService) {}

  getTemp(){
    return this.ws.getTemp();
  }

  getPh(){
    return this.ws.getPh();
  }
}
