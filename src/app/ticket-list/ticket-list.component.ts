import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFavorite } from '../interfaces/favorite';
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
  buttonText: string = "Expand Ticket";
  userid: number = -1;
  users: any; 
  showNewTicket: boolean = false;
  showOnlyFavorites: boolean = false;
  favoriteButtonText = "Show Only My Favorites";
  favorites: any;
  
  ngOnInit(): void {
    this.getTickets();
    this.getUsers();
  }

  addNewTicket(form: NgForm) {
    let newTicket: ITicket = {
      id: -1,
      title: form.form.value.title,
      openUserId: this.userid,
      description: form.form.value.description,
      resolution: '',
      closingUserId: 0,
      isClosed: false,
    };
    

    this.repositoryService.addNewTicket(newTicket).subscribe(
      () => {
        this.getTickets();
      }
    );

    form.resetForm();
    this.showNewTicket = false;
  };

  addTicketDisplay(): void {
    this.showNewTicket = !this.showNewTicket;
    /*
    if (this.showNewTicket) {
      this.buttonText = "Hide";
    }
    else {
      this.buttonText = "Show";
    }
    */
  }

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

  getAllFavorites() {
    this.repositoryService.getAllFavorites().subscribe(
      (response) => {
        this.favorites = response;
      }
    )
  }

  getFavorites(userId: number) {
    this.repositoryService.getFavorites(userId).subscribe(
      (response) => {
        this.favorites = response;
      }
    )
  }
  
  setuser(value: any){
    this.userid = value.target.value;
    this.getFavorites(this.userid);
  }
    
   toggleDetails(id: number): void {
    this.ticketId = id;
    this.showDetails = !this.showDetails;
    
    /*
    if (this.showDetails) {
      this.buttonText = "Hide";
    }
    else {
      this.buttonText = "Show";
    }
    */
  }

  toggleFavorites(): void {
    this.showOnlyFavorites = !this.showOnlyFavorites;
    this.favoriteButtonText = this.showOnlyFavorites ? "Show All Tickets" : "Show Only My Favorites";
  }

  public ticketIsFavorite(id: number): boolean {
    let ok:boolean = false;
        
    this.favorites.forEach((favorite: { id: number, userId: number, ticketId: number }) => {
      if (favorite.ticketId === id)
      {
        ok = true;
        return;
      }
    });
    
    return ok;
  }

  setUnsetFavorite(ticketId: number, userId: number) {
    this.repositoryService.setUnsetFavorite(ticketId, userId).subscribe(
      () => {
        this.getFavorites(this.userid);
      }
    );
  }

}
