using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Cuvi.WebApi.Data;

public class AppDbContext : IdentityDbContext<MyUser>
{
    public AppDbContext(DbContextOptions<AppDbContext> options): base(options) { }
    public DbSet<Cabinet> Cabinets { get; set; } = null!;
    public DbSet<CabinetMember> CabinetMembers { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }
}