using Deshawns.Models;

#region Lists
//  Dogs
List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Timmy",
        Breed = "Border Collie"
    },
    new Dog()
    {
        Id = 2,
        Name = "Rocket",
        Breed = "Terrier"
    },
    new Dog()
    {
        Id = 3,
        Name = "Finestro",
        Breed = "Great Dane"
    },
    new Dog()
    {
        Id = 4,
        Name = "Big Bear",
        Breed = "Poodle"
    },
    new Dog()
    {
        Id = 5,
        Name = "Hazel",
        Breed = "Sheepdog"
    },
    new Dog()
    {
        Id = 6,
        Name = "Scotty",
        Breed = "Golden Doodle"
    },
    new Dog()
    {
        Id = 7,
        Name = "Mac",
        Breed = "Weiner Dog"
    },
    new Dog()
    {
        Id = 8,
        Name = "Panda",
        Breed = "Panda"
    }
};

//  Cities
List<City> cities = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "Pittsburgh"
    },
    new City()
    {
        Id = 2,
        Name = "Minneapolis"
    },
    new City()
    {
        Id = 3,
        Name = "Phoenix"
    },
    new City()
    {
        Id = 4,
        Name = "Tucson"
    },
    new City()
    {
        Id = 5,
        Name = "Denver"
    },
    new City()
    {
        Id = 6,
        Name = "Boise"
    },
    new City()
    {
        Id = 7,
        Name = "San Diego"
    },
    new City()
    {
        Id = 8,
        Name = "Sarasota"
    },
    new City()
    {
        Id = 9,
        Name = "White Plains"
    },
    new City()
    {
        Id = 10,
        Name = "Chicago"
    }
};

//  Walkers
List<Walker> walkers = new List<Walker>()
{
    new Walker()
    {
        Id = 1,
        Name = "Alphonse Meron",
    },
    new Walker()
    {
        Id = 2,
        Name = "Damara Pentecust",
    },
    new Walker()
    {
        Id = 3,
        Name = "Anna Bowton",
    },
    new Walker()
    {
        Id = 4,
        Name = "Hunfredo Dryman",
    },
    new Walker()
    {
        Id = 5,
        Name = "Elmira Bick",
    },
    new Walker()
    {
        Id = 6,
        Name = "Bernie Dreger",
    },
    new Walker()
    {
        Id = 7,
        Name = "Rolando Gault",
    },
    new Walker()
    {
        Id = 8,
        Name = "Tiffanie Tubby",
    },
    new Walker()
    {
        Id = 9,
        Name = "Tomlin Cutill",
    },
    new Walker()
    {
        Id = 10,
        Name = "Arv Biddle",
    }
};

#endregion


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});


app.Run();