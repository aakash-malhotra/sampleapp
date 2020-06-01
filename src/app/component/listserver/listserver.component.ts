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
  public server:ServerDb;
  public sno:number;
  constructor(private _serverDbService:ServerDbService, private _router:Router) { }

  ngOnInit() {
   this._serverDbService.getServers().subscribe((servers)=>{
     console.log(servers);
     this.servers=servers;
   },(error)=>{
     console.log(error);
   });
  }

  getServer(sno) {
    
    this._serverDbService.getServer(sno).subscribe((data:any[])=>{
      console.log(data);
    },(error)=>{
      console.log(sno);
      console.log(error);
    });
   }

  deleteServer(sno){
    this._serverDbService.deleteServer(sno).subscribe((data)=>{
      this.servers.splice(this.servers.indexOf(sno), 1);
    },(error)=>{
      console.log(error);
    });
  }
  updateServer(sno){
    this._serverDbService.setter(sno);
    this._router.navigate(['/op']);
  }
  newserver(){
   let server=new ServerDb();
    this._serverDbService.setter(server);
    this._router.navigate(['/op']);
  }

}



