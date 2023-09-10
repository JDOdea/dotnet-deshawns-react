namespace Deshawns.Models;

public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<int> CityIds { get; set; }
    public List<int> DogIds { get; set; }
    public List<City> Cities { get; set; }
}