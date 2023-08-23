namespace Deshawns.Models;

public class Dog
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Breed { get; set; }
    public int UserId { get; set; }
    public int WalkerId { get; set; }
    public int CityId { get; set; }
}