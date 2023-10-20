using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Cuvi.WebApi.Data;

public record CabinetMember
{
    public string CabinetId { get; set; }
    public Cabinet Cabinet { get; set; }

    public string UserId { get; set; }
    public MyUser User { get; set; }

    public string Role { get; set; } // "student", "admin", "teacher"
}

public class CabinetMemberConfiguration : IEntityTypeConfiguration<CabinetMember>
{
    public void Configure(EntityTypeBuilder<CabinetMember> modelBuilder)
    {
        modelBuilder.HasKey(cm => new { cm.CabinetId, cm.UserId });

        modelBuilder.HasOne(cm => cm.Cabinet)
            .WithMany(c => c.Members)
            .HasForeignKey(cm => cm.CabinetId);

        modelBuilder.HasOne(cm => cm.User)
            .WithMany(u => u.CabinetMemberships)
            .HasForeignKey(cm => cm.UserId);
    }
}