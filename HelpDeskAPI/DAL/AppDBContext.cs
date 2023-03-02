using Microsoft.EntityFrameworkCore;
using HelpDeskAPI.Models;

namespace HelpDeskAPI.DAL
{
  public class AppDBContext : DbContext
  {

    public AppDBContext()
    {

    }

    public AppDBContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Ticket> Tickets { get; set; }
    public DbSet<Favorite> Favorites { get; set; }
    public DbSet<User> Users { get; set; }


    private static IConfigurationRoot _configuration;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

        _configuration = builder.Build();
        string cnstr = _configuration.GetConnectionString("TicketDB");
        optionsBuilder.UseSqlServer(cnstr);
      }
    }
  }
}
