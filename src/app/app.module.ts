import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TitleComponent } from './title/title.component';
import { DesktopComponent } from './desktop/desktop.component';
import { HoverClassDirective } from './hover-class.directive';

import { NgxDraggableDomModule } from "ngx-draggable-dom";
import { TestWindowComponent } from './test-window/test-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TitleComponent,
    DesktopComponent,
    HoverClassDirective,
    TestWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDraggableDomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
