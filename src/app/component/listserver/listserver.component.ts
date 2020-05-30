import { Component, OnInit } from '@angular/core';
import {ServerDbService} from '../../shared_service/server-db.service';
import {ServerDb} from '../../server-db';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listserver',
  templateUrl: './listserver.component.html',
  styleUrls: ['./listserver.component.css']
})
export class ListserverComponent implements OnInit {

  public servers:any;
  public server:any;
  constructor(private _serverDbService:ServerDbService, private _router:Router) { }

  ngOnInit() {
   this._serverDbService.getServers().subscribe((servers)=>{
     console.log(servers);
     this.servers=servers;
   },(error)=>{
     console.log(error);
   });
  }
  deleteServer(server){
    this._serverDbService.deleteServer(server.sno).subscribe((data)=>{
      this.servers.splice(this.servers.indexOf(server), 1);
    },(error)=>{
      console.log(error);
    });
  }
  updateServer(server){
    this._serverDbService.setter(server);
    this._router.navigate(['/op']);
  }
  newserver(){
   let server=new ServerDb();
    this._serverDbService.setter(server);
    this._router.navigate(['/op']);
  }

}



