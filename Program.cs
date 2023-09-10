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
        CityId = 3,
        WalkerId = 2
    },
    new Dog()
    {
        Id = 2,
        Name = "Rocket",
        Breed = "Terrier",
        CityId = 6,
        WalkerId = 8
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
        CityId = 8,
        WalkerId = 2
    },
    new Dog()
    {
        Id = 5,
        Name = "Hazel",
        Breed = "Sheepdog",
        CityId = 3
    },
    new Dog()
    {
        Id = 6,
        Name = "Scotty",
        Breed = "Golden Doodle",
        CityId = 7,
        WalkerId = 1
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
        CityId = 4,
        WalkerId = 4
    },
    new Dog()
    {
        Id = 10,
        Name = "Cat",
        Breed = "Labrador",
        CityId = 2,
        WalkerId = 7
    },
    new Dog()
    {
        Id = 11,
        Name = "Brutus",
        Breed = "Golden Retriever",
        CityId = 5,
        WalkerId = 9
    },
    new Dog()
    {
        Id = 12,
        Name = "Philmore",
        Breed = "Pug",
        CityId = 10,
        WalkerId = 2
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

//  WalkerCities
List<WalkerCity> walkerCities = new List<WalkerCity>()
{
    new WalkerCity()
    {
        Id = 1,
        WalkerId = 10,
        CityId = 1
    },
    new WalkerCity()
    {
        Id = 2,
        WalkerId = 8,
        CityId = 6
    },
    new WalkerCity()
    {
        Id = 3,
        WalkerId = 5,
        CityId = 4
    },
    new WalkerCity()
    {
        Id = 4,
        WalkerId = 9,
        CityId = 10
    },
    new WalkerCity()
    {
        Id = 5,
        WalkerId = 2,
        CityId = 3
    },
    new WalkerCity()
    {
        Id = 6,
        WalkerId = 4,
        CityId = 7
    },
    new WalkerCity()
    {
        Id = 7,
        WalkerId = 1,
        CityId = 5
    },
    new WalkerCity()
    {
        Id = 8,
        WalkerId = 7,
        CityId = 9
    },
    new WalkerCity()
    {
        Id = 9,
        WalkerId = 3,
        CityId = 2
    },
    new WalkerCity()
    {
        Id = 10,
        WalkerId = 6,
        CityId = 8
    },
    new WalkerCity()
    {
        Id = 11,
        WalkerId = 6,
        CityId = 9
    },
    new WalkerCity()
    {
        Id = 12,
        WalkerId = 9,
        CityId = 7
    },
    new WalkerCity()
    {
        Id = 13,
        WalkerId = 5,
        CityId = 7
    },
    new WalkerCity()
    {
        Id = 14,
        WalkerId = 10,
        CityId = 2
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
    return dogs.OrderBy(d => d.Id);
});

//  Get Specific Dog
app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(dog);
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

//  Delete Dog
app.MapDelete("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }
    dogs.RemoveAt(id - 1);
    return Results.Ok();
});

#endregion

#region CityEndpoints
//  Get Cities
app.MapGet("/api/cities", () =>
{
    return cities;
});

//  Get Specific City
app.MapGet("/api/cities/{id}", (int id) =>
{
    City city = cities.First(c => c.Id == id);
    if (city == null)
    {
        return Results.NotFound();
    }
    if (id != city.Id)
    {
        return Results.BadRequest();
    }
    //  Get City's Walkers
    List<WalkerCity> walkerCitiesForCity1 = walkerCities.Where(wc => wc.CityId == id).ToList();

    List<Walker> walkersFor1 = walkerCitiesForCity1.Select(wc => walkers.First(w => w.Id == wc.WalkerId)).ToList();

    city.Walkers = walkersFor1;

    return Results.Ok(city);
});

// Post City
app.MapPost("/api/cities", (City city) =>
{
    city.Id = cities.Count > 0 ? cities.Max(c => c.Id) + 1 : 1;
    cities.Add(city);
    return city;
});
#endregion

#region WalkerCityEndpoints
//  Get WalkerCities
app.MapGet("/api/walkercities", () =>
{
    return walkerCities;
});
#endregion

#region WalkerEndpoints
//  Get Walkers
app.MapGet("/api/walkers", () =>
{
    return walkers;
});

//  Get Specific Walker
app.MapGet("/api/walkers/{id}", (int id) =>
{
    Walker walker = walkers.FirstOrDefault(w => w.Id == id);
    if (walker == null)
    {
        return Results.NotFound();
    }
    //  Get Walker's Cities
    List<WalkerCity> walkerCitiesForWalker1 = walkerCities.Where(wc => wc.WalkerId == id).ToList();

    List<City> citiesFor1 = walkerCitiesForWalker1.Select(wc => cities.First(c => c.Id == wc.CityId)).ToList();

    walker.Cities = citiesFor1;

    return Results.Ok(walker);
});

//  Update Walker
app.MapPut("/api/walkers/{id}", (int id, Walker walkerUpdate) => 
{
    //  Get Requested Walker
    Walker walker = walkers.FirstOrDefault(w => w.Id == id);
    if (walker == null)
    {
        return Results.NotFound();
    }

    //  Get List of Dogs walked by Walker
    List<Dog> walkerDogs = dogs.Where(d => d.WalkerId == id).ToList();

    //  For each Dog being walked by old Walker, set WalkerId to 0
    foreach (Dog dog in walkerDogs)
    {
        dog.WalkerId = null;
    }

    //  For each Dog being walked by updated Walker
    foreach (int dogId in walkerUpdate.DogIds)
    {
        Dog matchedDog = dogs.SingleOrDefault(d => d.Id == dogId);
        matchedDog.WalkerId = id;
    }

    //  Edit WalkerCities list to not have Walker's Citys
    walkerCities = walkerCities.Where(wc => wc.WalkerId != walker.Id).ToList();


    //  Create new WalkerCity Objects for matched Walker
    foreach (int cityId in walkerUpdate.CityIds)
    {
        WalkerCity newWC = new WalkerCity
        {
            Id = walkerCities.Count > 0 ? walkerCities.Max(wc => wc.Id) + 1 : 1,
            WalkerId = walker.Id,
            CityId = cityId
        };
        walkerCities.Add(newWC);
    }
    

    return Results.Ok();
});

//  Delete Walker
app.MapDelete("/api/walkers/{id}", (int id) =>
{
    Walker walker = walkers.FirstOrDefault(w => w.Id == id);
    if (walker == null)
    {
        return Results.NotFound();
    }

    //  Get List of Dogs walked by Walker
    List<Dog> walkerDogs = dogs.Where(d => d.WalkerId == id).ToList();

    //  For each Dog being walked by old Walker, set WalkerId to 0
    foreach (Dog dog in walkerDogs)
    {
        dog.WalkerId = null;
    }

    walkers.RemoveAt(id - 1);
    return Results.Ok();
});
#endregion

#endregion

app.Run();