import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server has been created yet';
  serverID = 10;
  serverStatus = 'offline';
  serverName = 'TestSever';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ' + this.serverName;
    this.serverCreated = true;

  }

  onUpdateServerName(event: Event ) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}
