import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  message = 'This message is using Property Binding';

  getMessage(){
    return this.message;
  }
}
