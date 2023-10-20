using System.Collections;
using Cuvi.WebApi.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace Cuvi.WebApi.ApiEndpoints;

public static class CabinetsEndpoints
{
    public static IEndpointRouteBuilder MapCabinetsEndpoints(this IEndpointRouteBuilder builder)
    {
        var group = builder.MapGroup("cabinets").WithTags("Cabinets").RequireAuthorization();

        group.MapGet("", async Task<Results<Ok<List<Cabinet>>, NotFound>> (HttpContext context)  =>
        {
            var db = context.RequestServices.GetRequiredService<AppDbContext>();
            var cabinets = await db.Cabinets.ToListAsync();
            return TypedResults.Ok(cabinets);
        });
        
        group.MapGet("{cabinetId}", async Task<Results<Ok<Cabinet>, NotFound>> (HttpContext context, string cabinetId) =>
        {
            var db = context.RequestServices.GetRequiredService<AppDbContext>();
            var cabinet = await db.Cabinets.FindAsync(cabinetId);
            if (cabinet == null)
            {
                return TypedResults.NotFound();
            }

            return TypedResults.Ok(cabinet);
        });

        var membersGroup = group.MapGroup("{cabinetId}/members");
        membersGroup.MapGet("", async Task<Results<Ok<List<CabinetMember>>, NoContent>> (HttpContext context, string cabinetId) =>
        {
            var db = context.RequestServices.GetRequiredService<AppDbContext>();
            var cabinetMembers = await db.CabinetMembers
                .Include(cm => cm.User)
                .Where(cm => cm.CabinetId == cabinetId)
                .ToListAsync();
            
            if (!cabinetMembers.Any())
            {
                return TypedResults.NoContent();
            }

            return TypedResults.Ok(cabinetMembers);
        });
        return group;
    }
}