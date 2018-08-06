import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {NavbarComponent} from './components/navbar/navbar.component';

import {DataService} from './services/data.service';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
