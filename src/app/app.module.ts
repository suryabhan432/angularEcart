import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSwitchComponent } from './ang-directive/ng-switch/ng-switch.component';
import { AngDirectiveComponent } from './ang-directive/ang-directive.component';
import { NgForComponent } from './ang-directive/ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TvComponent } from './products/tv/tv.component';
import { WahingMachineComponent } from './products/wahing-machine/wahing-machine.component';
import { CardComponent } from './about/card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card2Component } from './card2/card2.component';
import { Card1Component } from './card1/card1.component';


const appRoutes:Routes = [              //routing create karne ke liye  "RouterModule,Router" ko import karna padta hai aur import me 'RouterModule.forRoot(appRoute)' likhna padta hai . ||| aur app.component.html me '<router-outlet></router-outlet>' likhna padta hai.
  { path:'', component:HomeComponent},
  { path:'about', children:[
    {path:'', component:AboutComponent},
    {path : 'laptop', component : LaptopComponent},
    {path : 'tv', component:TvComponent},
    {path : 'washing-machine', component:WahingMachineComponent}

  ]},
  
  { path:'contact', component:ContactComponent},
  { path:'parent', component:ParentComponent},
  { path:'product', component:ProductsComponent , children: [
    {path : 'laptop', component : LaptopComponent},
    {path : 'tv', component:TvComponent},
    {path : 'washing-machine', component:WahingMachineComponent}

  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    AngDirectiveComponent,
    NgForComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    WahingMachineComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card2Component,
    Card1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }