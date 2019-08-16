import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { WebsocketService } from '../service/websocket.service'; 

@Component({
  selector: 'app-ph',
  templateUrl: './ph.page.html',
  styleUrls: ['./ph.page.scss'],
})
export class PhPage implements OnInit {
  ph;
  historyPh;
  constructor(private toastController: ToastController, private ws:WebsocketService) { 
    this.historyPh = [];
  }

  ngOnInit() {
    this.ph = 7;
    this.addToHistory();
  }

  coverClass(){
    this.ph = this.ws.getPh();
    let cover = "cover ";
    if(this.ph > 7.5){
      return cover+= "red-cover";
    } else if(this.ph < 6.5){
      return cover+= "blue-cover";
    }
    return cover+= "green-cover";
  }

  addToHistory(){
    let scope = this;
    setInterval(function(){
      let ph = scope.ws.getPh();
      if(ph){
        let date = new Date();
        let time = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())  
          + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " 
          + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" 
          + (date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()) + ":" 
          + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
        let r = "Optimal";
        if(ph > 7.5 || ph < 6.5){
          r = "Vulnerable";
        } 
        let data = {
          timestamp: time,
          level: ph,
          remarks: r
        }
        scope.historyPh.push(data);
      }
    }, 1000);
  }

}
