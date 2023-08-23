namespace Deshawns.Models;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int DogId { get; set; }
    public int CityId { get; set; }
    public bool IsWalker { get; set; }
}