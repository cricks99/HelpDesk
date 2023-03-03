import { Component, Input } from '@angular/core';
import { Iuser } from '../interfaces/user';
import { TicketRepositoryService } from '../ticket-repository.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() userId:number = 0;

  user:Iuser | undefined;
  constructor(private _ticketRepo:TicketRepositoryService){
    
  }

  ngOnInit():void{
    this._ticketRepo.getUserById(this.userId).subscribe(
      (response) => {
        this.user = response;});
  }
}
