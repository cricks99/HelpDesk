import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ITicket } from './interfaces/ticket';
import { IFavorite } from './interfaces/favorite';
import { Iuser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7177/api/Ticket'
  apiUser: string = 'https://localhost:7177/api/Ticket/User'
  apiFavorite: string = 'https://localhost:7177/api/Ticket/Favorite'

  getTicketList() {
    return this.http.get(this.apiUri)
  }

  addNewTicket(ticket: ITicket) {
    return this.http.post(`${this.apiUri}/add`, ticket)
  }

  getTicketDetails(ticketId: number) {
    return this.http.get<ITicket>(`${this.apiUri}/${ticketId}`)
  }

  getUsers() {
    return this.http.get(this.apiUser)
  }

  getAllFavorites() {
    return this.http.get<IFavorite>(`${this.apiFavorite}/`)
  }

  getFavorites(userid: number) {
    return this.http.get<IFavorite>(`${this.apiFavorite}/${userid}`)
  }

  setUnsetFavorite(ticketId: number, userId: number) {
    return this.http.post(`${this.apiFavorite}/setunset/${ticketId}/${userId}`, null)
  }

  getUserById(userId:number){
    return this.http.get<Iuser>(`${this.apiUser}/${userId}`);
  }


  resolveTicket(ticket:any) {
    return this.http.post(`${this.apiUri}/resolve?id=${ticket.id}&resolution=${ticket.resolution}&closingUserId=${ticket.closingUserId}`, null)
  }
}
