import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
  username = '';
  isActive = false;

  onResetBtnClicked() {
    this.username = '';
  }

  onUpdateUsername(event: Event) {
    if ((<HTMLInputElement>event.target).value === '') {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}

