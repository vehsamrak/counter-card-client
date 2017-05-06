import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history/history.component';
import { RoutingModule } from './routing.module';
import { HelpComponent } from './components/help/help.component';

@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent,
        HelpComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
