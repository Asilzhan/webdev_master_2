using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cuvi.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class AddCabinets : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BithDate",
                table: "AspNetUsers",
                newName: "BirthDate");

            migrationBuilder.CreateTable(
                name: "Cabinets",
                columns: table => new
                {
                    Id = table.Column<string>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cabinets", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CabinetMembers",
                columns: table => new
                {
                    CabinetId = table.Column<string>(type: "TEXT", nullable: false),
                    UserId = table.Column<string>(type: "TEXT", nullable: false),
                    Role = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CabinetMembers", x => new { x.CabinetId, x.UserId });
                    table.ForeignKey(
                        name: "FK_CabinetMembers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CabinetMembers_Cabinets_CabinetId",
                        column: x => x.CabinetId,
                        principalTable: "Cabinets",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CabinetMembers_UserId",
                table: "CabinetMembers",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CabinetMembers");

            migrationBuilder.DropTable(
                name: "Cabinets");

            migrationBuilder.RenameColumn(
                name: "BirthDate",
                table: "AspNetUsers",
                newName: "BithDate");
        }
    }
}
