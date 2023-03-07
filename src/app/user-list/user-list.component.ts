import { Component } from '@angular/core';
import { Iuser } from '../interfaces/user';
import { TicketRepositoryService } from '../ticket-repository.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList : any;

  constructor(private _ticketRepo : TicketRepositoryService){
    //
  }

  ngOnInit():void{
    this.getUsers();
  }

  getUsers(){
    this._ticketRepo.getUsers().subscribe(
      (response) => {
        this.userList = response;
      });
  }

}
