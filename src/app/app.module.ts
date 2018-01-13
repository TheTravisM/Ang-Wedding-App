import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeddingPartyComponent } from './wedding-party/wedding-party.component';
import { HeaderComponent } from './header/header.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LocationComponent } from './location/location.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { RegistryComponent } from './registry/registry.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WeddingPartyComponent,
    HeaderComponent,
    CountdownComponent,
    LocationComponent,
    OurStoryComponent,
    RegistryComponent,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
