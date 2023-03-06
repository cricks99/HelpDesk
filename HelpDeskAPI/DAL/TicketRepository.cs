using HelpDeskAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace HelpDeskAPI.DAL
{
  public class TicketRepository
  {
    private AppDBContext _dbContext = new AppDBContext();

    public List<Ticket> GetAllTickets()
    {
      return _dbContext.Tickets.AsNoTracking().ToList();
    }

    public Ticket GetbyId(int id)
    {
      return _dbContext.Tickets.AsNoTracking().FirstOrDefault(x => x.Id == id);
    }

    public List<Favorite> GetAllFavorites()
    {
      return _dbContext.Favorites.AsNoTracking().ToList();
    }

    public List<Favorite> GetFavoriteByUserId(int id)
    {
      return _dbContext.Favorites.AsNoTracking().Where(x => x.UserId == id).ToList();
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
      return _dbContext.Users.AsNoTracking().ToList();
    }

    public void setUnsetFavorite(int ticketId, int userId)
    {
      Favorite favorite = _dbContext.Favorites.FirstOrDefault(x => x.TicketId == ticketId && x.UserId == userId);

      if (favorite == null)
      {
        favorite = new Favorite();
        favorite.TicketId = ticketId;
        favorite.UserId = userId;

        _dbContext.Favorites.Add(favorite);
      }
      else
        _dbContext.Favorites.Remove(favorite);

      _dbContext.SaveChanges();
    }

    public List<User> GetAllUsers()
    {
      return _dbContext.Users.AsNoTracking().ToList();
    }
  }
}
