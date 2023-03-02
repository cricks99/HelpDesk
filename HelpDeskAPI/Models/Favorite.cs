namespace HelpDeskAPI.Models
{
  public class Favorite
  {
    public int Id { get; set; }
    public int UserId { get; set; }
    public int TicketId { get; set; }
    public virtual User User { get; set; }
    public virtual Ticket Ticket { get; set; }
  }
}
