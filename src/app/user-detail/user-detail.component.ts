import { Component } from '@angular/core';
import { Iuser } from '../interfaces/user';
import { TicketRepositoryService } from '../ticket-repository.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user:Iuser | undefined;
  constructor(private _ticketRepo:TicketRepositoryService){
    
  }

  ngOnInit():void{
    //this._ticketRepo.getUserBy().subscribe(
      //(response) => {
        //this.ticketDetails = response;});
  }

}
