import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './bindings/eventbinding/property-binding/property-binding.component';
import { EventbindingComponent } from './bindings/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './bindings/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { AttributebindingComponent } from './bindings/attributebinding/attributebinding.component';
import { ClassbindingComponent } from './bindings/classbinding/classbinding.component';
import { StylebindingComponent } from './bindings/stylebinding/stylebinding.component';
@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    AttributebindingComponent,
    ClassbindingComponent,
    StylebindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
