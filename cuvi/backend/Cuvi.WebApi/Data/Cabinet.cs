namespace Cuvi.WebApi.Data;

public record Cabinet
{
    public string Id { get; set; }
    public string Name { get; set; }
    public string Image { get; set; }
    public string Description { get; set; }
    
    public List<CabinetMember> Members { get; set; }
}