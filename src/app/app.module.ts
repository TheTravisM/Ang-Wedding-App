import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './00-header/header.component';
import { CountdownComponent } from './01-countdown/countdown.component';
import { LocationComponent } from './02-location/location.component';
import { WeddingPartyComponent } from './03-wedding-party/wedding-party.component';
import { OurStoryComponent } from './04-our-story/our-story.component';
import { RegistryComponent } from './05-registry/registry.component';
import { RsvpComponent } from './06-rsvp/rsvp.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './09-footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    WeddingPartyComponent,
    HeaderComponent,
    CountdownComponent,
    LocationComponent,
    OurStoryComponent,
    RegistryComponent,
    RsvpComponent,
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
