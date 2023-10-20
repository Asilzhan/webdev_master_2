using Microsoft.AspNetCore.Identity;

namespace Cuvi.WebApi.Data;

public class MyUser : IdentityUser
{
    public DateTime BirthDate { get; set; }

    public List<CabinetMember> CabinetMemberships { get; set; } = new();
}