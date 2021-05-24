import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAllow:boolean = false;
  serverMessage:string;
  serverCreateStatus: string;
  isServerOn = false;
  servers = ['leo1', 'leo2']

  constructor(){
    setTimeout(() => {
      this.isAllow = true;
    }, 2000);
  }
  createServer(){
    this.isServerOn = true;
    this.servers.push(this.serverMessage)

  }
  // updateServerName(event: Event){
  //   this.serverMessage = (<HTMLInputElement>event.target).value;
  // }
}
