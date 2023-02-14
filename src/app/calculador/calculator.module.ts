import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CalculadorComponent } from './components/calculador.component'
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'',
        component:CalculadorComponent
    }
]
@NgModule({
    declarations: [
        // CalculadorComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [],

})
export class CalcModule { }
