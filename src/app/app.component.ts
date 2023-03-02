import { Component } from '@angular/core';
import { TicketRepositoryService } from './ticket-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelpDesk';


constructor(private repositoryService: TicketRepositoryService){ }

}