namespace HelpDeskAPI.Models
{
  public class Ticket
  {
    public int Id { get; set; }
    public int OpenUserId { get; set; }
    public string Description { get; set; }
    public string? Resolution { get; set; }
    public int? ClosingUserId { get; set; }
    public bool IsClosed { get; set; }
    public virtual List<User> Users { get; set; }
  }
}
