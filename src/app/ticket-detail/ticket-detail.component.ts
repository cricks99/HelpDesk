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

 ticketDetails: ITicket | undefined;
 constructor(private repo: TicketRepositoryService){}
 ngOnInit() : void{
  this.repo.getTicketDetails(this.ticketId).subscribe(
    (response) => {
      this.ticketDetails = response;});
 }
  
  showDetails: Boolean = false;
  buttonText: string = "Details"

  @Input () ticketId = 1;





  toggleDetails(): void{
    this.showDetails = !this.showDetails;
    if(this.showDetails){
      this.buttonText = "Hide";
    }
    else
    {
      this.buttonText = "Show";
    }
    }
}



