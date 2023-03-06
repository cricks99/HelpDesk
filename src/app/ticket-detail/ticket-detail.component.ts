import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ITicket } from '../interfaces/ticket';
import { TicketRepositoryService } from '../ticket-repository.service';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
}
)
export class TicketDetailComponent {

 ticketDetails: any;
 tickets: any;
 //resolveTicket: any;
 //userId: any = 5;
 
 constructor(private repositoryService: TicketRepositoryService){}

 ngOnInit() : void{
  this.repositoryService.getTicketDetails(this.ticketId).subscribe(
    (response) => {
      this.ticketDetails = response;});
 }

  @Input () ticketId: number = 1;

  resolveTicket(userId: number, form: NgForm) {
    let resolveTicket: any = {
      id: userId,
      resolution: form.form.value.resolution, //not passing resolution to backend from form, need to keep working through - NL
      closingUserId: userId,
      isClosed: true,
    };
    
    this.repositoryService.resolveTicket(resolveTicket).subscribe(
      () => {
        this.getTickets();
      }
    );

    form.resetForm();
    //this.showNewTicket = false;

  };
  
  getTickets() {
    this.repositoryService.getTicketList().subscribe(
      (response) => {
        this.tickets = response;
      });
  }

}



