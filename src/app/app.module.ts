import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { calcReducer } from './calculador/reduces/calculator.reducer';
import { CalculadorComponent } from './calculador/components/calculador.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ calc: calcReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
