namespace Deshawns.Models;

public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int UserId { get; set; }
    public List<City> Cities { get; set; }
}