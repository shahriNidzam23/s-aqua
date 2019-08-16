import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private websocket: any;
  private ph:any;
  private temp:any;
  constructor() { 
  }

  init(){

    this.websocket = new WebSocket('WEBSOCKET_URL');

     this.websocket.onopen = function(evt) {
        console.log('CONNECTED');
     };

     this.websocket.onclose = function(evt) {
        console.log('DISCONNECTED');
        console.log('RECONNECT');
        setTimeout(function(){ scope.init(); }, 3000);
     };

     const scope = this;
     this.websocket.onmessage = function(evt) {
          const wsData = JSON.parse(evt.data);
          if (wsData.APP_ID === 'SACS') {
            if(wsData.body.from == "arduino"){
              scope.setPh(wsData.body.data.ph);
              scope.setTemp(wsData.body.data.temp);
            }
          }
     };

     this.websocket.onerror = function(evt) {
          console.log(evt.data);
     };
  }

  send(data){
    let msg = {
      APP_ID: 'SACS',
      body: {
        from: "app",
        data:data
      }
    };
    console.log(msg);
    this.websocket.send(JSON.stringify(msg));
  }

  setPh(ph){
    this.ph = ph;
  }

  getPh(){
    return this.ph;
  }

  setTemp(temp){
    this.temp = temp;
  }

  getTemp(){
    return this.temp;
  }
}
