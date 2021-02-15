import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Routes} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';

import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';
import { BindComponent } from './components/bind/bind.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { ProductListComponent } from './components/product-list/product-list.component';
//import { TwoWayComponent } from './components/two-way/two-way.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RouterModule } from '@angular/router';
import{ EComponent } from './components/e/e.component';
import { LaptopComponent } from './components/product-list/laptop/laptop.component';
import { MobileComponent } from './components/product-list/mobile/mobile.component';
import { FridgeComponent } from './components/product-list/fridge/fridge.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { SampleService } from './appServices/sample.service';
import { CardComponent } from './components/card/card.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import{ SproductService} from './appServices/sproduct.service';
import { TestDirectiveDirective } from './appDirectives/test-directive.directive';
import { AboutComponent } from './components/about/about.component';
import { FilterPipe } from './appPipes/filter.pipe'
//import { TwoWayBindComponent } from './components/two-way-bind/two-way-bind.component';
// import { Home2Component } from './home2/home2.component';

const appRoutes:Routes=[
 // {path:'',redirectTo:'AboutUsComponent'},
  {path:'',component:AboutUsComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'users',component:UsersComponent},
  {path:'manage-product',component:ManageProductsComponent},
  {path:'temp',component:Comp1Component},

  {path:'card',component:CardComponent},
  {path:'parent',component:ParentComponent},
  {path:'products',children:[{path:'',component:ProductListComponent},{path:'laptop',component:LaptopComponent},{path:'mobile',component:MobileComponent},{path:'fridge',component:FridgeComponent}]},
  {path:'ngfor',component:NgForComponent},
  {path:'todos',component:TodosComponent},
  {path:'bind',component:BindComponent},
  {path:'**',component:EComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    BindComponent,
    ProductListComponent,
    NgForComponent,
    EComponent,
    Comp1Component,
  //  TwoWayComponent,
    AboutUsComponent,
  LaptopComponent,
  MobileComponent,
  FridgeComponent,
  UsersComponent,
  ParentComponent,
  ChildComponent,
  CardComponent,
  Comp1Component,
  Comp2Component,
  Comp3Component,
  Comp4Component,
  ManageProductsComponent,
  TestDirectiveDirective,
  AboutComponent,
  FilterPipe
   // TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot(appRoutes)

   // FormsModule
    // MatExpansionModule
  ],
  providers: [SampleService,SproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
