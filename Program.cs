using Deshawns.Models;

#region Lists
//  Dogs
List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Timmy",
        Breed = "Border Collie",
        CityId = 3
    },
    new Dog()
    {
        Id = 2,
        Name = "Rocket",
        Breed = "Terrier",
        CityId = 6
    },
    new Dog()
    {
        Id = 3,
        Name = "Finestro",
        Breed = "Great Dane",
        CityId = 8
    },
    new Dog()
    {
        Id = 4,
        Name = "Big Bear",
        Breed = "Poodle",
        CityId = 8
    },
    new Dog()
    {
        Id = 5,
        Name = "Hazel",
        Breed = "Sheepdog",
        CityId = 9
    },
    new Dog()
    {
        Id = 6,
        Name = "Scotty",
        Breed = "Golden Doodle",
        CityId = 7
    },
    new Dog()
    {
        Id = 7,
        Name = "Mac",
        Breed = "Weiner Dog",
        CityId = 3
    },
    new Dog()
    {
        Id = 8,
        Name = "Panda",
        Breed = "Panda",
        CityId = 1
    },
    new Dog()
    {
        Id = 9,
        Name = "Harold",
        Breed = "Dachsund",
        CityId = 4
    },
    new Dog()
    {
        Id = 10,
        Name = "Cat",
        Breed = "Labrador",
        CityId = 2
    },
    new Dog()
    {
        Id = 11,
        Name = "Brutus",
        Breed = "Golden Retriever",
        CityId = 5
    },
    new Dog()
    {
        Id = 12,
        Name = "Philmore",
        Breed = "Pug",
        CityId = 10
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

#region Default Needs
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
#endregion

#region Endpoints
//  Get Message
app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

#region DogEndpoints
//  Get Dogs
app.MapGet("/api/dogs", () =>
{
    return dogs;
});

//  Post Dog
app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Count > 0 ? dogs.Max(d => d.Id) + 1 : 1;
    //TEMP CODE
    dog.CityId = 1;
    dogs.Add(dog);
    return dog;
});

#endregion

app.MapGet("/api/cities", () =>
{
    return cities;
});

#endregion

app.Run();