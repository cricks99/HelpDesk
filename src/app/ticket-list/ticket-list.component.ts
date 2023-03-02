import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITicket } from '../interfaces/ticket';
import { Iuser } from '../interfaces/user';
import { TicketRepositoryService } from '../ticket-repository.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  title = 'Ticket List';

  constructor(private repositoryService: TicketRepositoryService) { }
  tickets: any;
  ticketTitle: string = "";
  openUserId: number = 1;
  description: string = "";
  resolution: string = '';
  closingUserId: number = 0;
  isClosed: boolean = false;
  ticketId: number = 1;
  showDetails: boolean = false;
  buttonText: string = "Show";
  userid: number = -1;
  users: any; 


  ngOnInit(): void {
    this.getTickets();
    this.getUsers();
  }

  addNewTicket(form: NgForm) {
    let newTicket: ITicket = {
      id: -1,
      title: form.form.value.Title,
      openUserId: form.form.value.openUserId,
      description: form.form.value.description,
      resolution: '',
      closingUserId: 0,
      isClosed: false

    };

    this.repositoryService.addNewTicket(newTicket).subscribe(
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

  resolveTicket(Ticket: any): void {
    this.tickets.isClosed = true;
  }


  getUsers(){
    this.repositoryService.getUsers().subscribe(
      (response) => {
        this.users = response;
      });
  }
  

 /* favorite(userid: number, ticketid: number) {
    this.repositoryService.getFavoriteList().subscribe(
      (response) => {
        this.tickets = response;
      });
  }*/

  toggleDetails(id: number): void {
    this.ticketId = id;
    this.showDetails = !this.showDetails;
    if (this.showDetails) {
      this.buttonText = "Hide";
    }
    else {
      this.buttonText = "Show";
    }
  }

}
