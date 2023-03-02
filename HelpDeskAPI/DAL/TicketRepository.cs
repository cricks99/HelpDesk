using HelpDeskAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskAPI.DAL
{
  public class TicketRepository
  {
    private AppDBContext _dbContext = new AppDBContext();

    public List<Ticket> GetAllTickets()
    {
      return _dbContext.Tickets.ToList();
    }
    public Ticket GetbyId(int id)
    {
      return _dbContext.Tickets.AsNoTracking().FirstOrDefault(x => x.Id == id);
    }
    public void AddTicket(Ticket newticket)
    {
      _dbContext.Tickets.Add(newticket);
      _dbContext.SaveChanges();
      return;
    }
    public bool ResolveTicket(Ticket resolve)
    {
      Ticket ticketUpdate = GetbyId(resolve.Id);
      if (ticketUpdate == null)
      {
        return false;
      }
      ticketUpdate.Resolution = resolve.Resolution;
      ticketUpdate.ClosingUserId = resolve.ClosingUserId;
      _dbContext.Tickets.Update(ticketUpdate);
      _dbContext.SaveChanges();
      return true;
    }
    public List<User> GetUsers()
    {
      return _dbContext.Users.ToList();
    }
    /*public void FavoriteSelect(int userId, int ticketId)
    {
      if
    }

    public List<User> GetAllUsers()
    {
      return _dbContext.Users.ToList();
}*/
  }
}
