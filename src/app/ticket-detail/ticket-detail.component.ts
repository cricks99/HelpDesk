import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ITicket } from '../interfaces/ticket';
import { TicketRepositoryService } from '../ticket-repository.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
}
)
export class TicketDetailComponent {

 ticketDetails: any;
 tickets: any;
 
 constructor(private repositoryService: TicketRepositoryService){}

 ngOnInit() : void{
  this.repositoryService.getTicketDetails(this.ticketId).subscribe(
    (response) => {
      this.ticketDetails = response;});
 }

  @Input () ticketId: number = 1;
  @Input () userid: number = 1;
  @Input () showDetails: boolean = false;
  @Output() showDetailsChange = new EventEmitter<boolean>();

  resolveTicket(userId: number, form: NgForm) {
    let resolveTicket: any = {
      id: this.ticketId,
      resolution: form.form.value.resolution,
      closingUserId: this.userid,
      isClosed: true
    };
    
    this.repositoryService.resolveTicket(resolveTicket).subscribe(
      () => {
        this.getTickets();
      }
    );

    form.resetForm();

  };
  
  getTickets() {
    this.repositoryService.getTicketList().subscribe(
      (response) => {
        this.tickets = response;
      });
  }
}



