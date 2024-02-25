import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  @Input() name!: String;

  @Output() counterchange: EventEmitter<string> = new EventEmitter<string>();

  handlebutton(operation:string){
    this.counterchange.emit(operation);
  }
}
