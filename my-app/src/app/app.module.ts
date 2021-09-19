import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComponentsComponent } from './components/components.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SideSectionComponent } from './side-section/side-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComponentsComponent,
    MainSectionComponent,
    PageNotfoundComponent,
    SideSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
