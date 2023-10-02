using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cuvi.WebApi.Migrations
{
    /// <inheritdoc />
    public partial class AddBirthDate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "BithDate",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BithDate",
                table: "AspNetUsers");
        }
    }
}
