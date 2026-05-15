import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { ContainerComponent } from './componentes/container/container.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ContentComponent } from './componentes/content/content.component';
import { NavlinksComponent } from './componentes/header/navlinks/navlinks.component';
import { LogoComponent } from './componentes/header/logo/logo.component';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ContentComponent, // Keep here
    NavlinksComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule, // Add this for the Material Table
    MatButtonModule
    // ContentComponent REMOVED from here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }