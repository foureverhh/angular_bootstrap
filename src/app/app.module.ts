import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Myc04NgifclsComponent } from './myc04-ngifcls/myc04-ngifcls.component';
import { Myc05NgifComponent } from './myc05-ngif/myc05-ngif.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { BootstrapIntroComponent } from './bootstrap-intro/bootstrap-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc04NgifclsComponent,
    Myc05NgifComponent,
    Myc06StyleComponent,
    BootstrapIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
