using HelpDeskAPI.DAL;
using HelpDeskAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Reflection;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HelpDeskAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TicketController : ControllerBase
  {
    private TicketRepository repo = new TicketRepository();
    // GET: api/<TicketController>
    [HttpGet]
    public List<Ticket> GetAll()
    {
      return repo.GetAllTickets();
    }

    // GET api/<TicketController>/5
    [HttpGet("{id}")]
    public Ticket FindById(int id)
    {
      return repo.GetbyId(id);
    }

    // POST api/<TicketController>
    [HttpPost("add")]
    public void addNewTicket(Ticket ticket)
    {
      Ticket newTicketAdded = new Ticket
      {
        Title = ticket.Title,
        OpenUserId = ticket.OpenUserId,
        Description = ticket.Description
      };
       repo.AddTicket(newTicketAdded);
    }

  // PUT api/<TicketController>/5
  [HttpPost("resolve")]
  public HttpResponseMessage ResolveTicket(int id, string resolution, int closingUserId)
  {
      Ticket ticketToUpdate = new Ticket
      {
        Id = id,
        Resolution = resolution,
        ClosingUserId = closingUserId,
        IsClosed = true

      };
      try
      {
        if (repo.ResolveTicket(ticketToUpdate) == true)
        {
          return new HttpResponseMessage(HttpStatusCode.NoContent);
        }
        else
        {
          return new HttpResponseMessage(HttpStatusCode.NotFound);
        }
      }
      catch (Exception ex)
      {
        return new HttpResponseMessage(HttpStatusCode.ServiceUnavailable);
      }
  }

  // DELETE api/<TicketController>/5
  [HttpDelete("{id}")]
  public void Delete(int id)
  {
  }
}
}
