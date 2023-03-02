import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITicket } from '../interfaces/ticket';
import { TicketRepositoryService } from '../ticket-repository.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent {

 ticketDetails: any;
 constructor(private repo: TicketRepositoryService){}
 ngOnInit() : void{
  this.repo.getTicketDetails(this.ticketId).subscribe(
    (response) => {
      this.ticketDetails = response;});
 }

  @Input () ticketId: number = 1;

 
}



