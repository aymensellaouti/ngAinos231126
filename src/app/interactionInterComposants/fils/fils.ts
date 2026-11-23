import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-fils',
  styleUrl: './fils.css',
  templateUrl: './fils.html',
})
export class Fils {

  messageDePapa = input.required({
    alias: 'message',
    transform: (message) => "Papa a dit : " + message
  });

  sendMessageToDad = output<string>()

  onSendMessageToDad() {
    this.sendMessageToDad.emit("ok mais seulement si je garde la monnaie")
  }
}
