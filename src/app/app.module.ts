import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListserverComponent } from './component/listserver/listserver.component';
import { ServerDbFormComponent } from './component/server-db-form/server-db-form.component';
import { ServerDbService } from './shared_service/server-db.service';

const appRoutes:Routes=[
  {path: '', component:ListserverComponent},
  {path: 'op', component:ServerDbFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListserverComponent,
    ServerDbFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ServerDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
