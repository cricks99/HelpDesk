var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: "CorsPolicy",
      builder =>
      {
        builder.SetIsOriginAllowed(origin => true);
        builder.AllowAnyMethod();
        builder.AllowAnyHeader();
        builder.AllowCredentials();
      });
});

var app = builder.Build();




// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment()) // removed the "if" statement when deployed to Azure
//{
  app.UseSwagger();
  app.UseSwaggerUI();
//}

app.UseHttpsRedirection();
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
