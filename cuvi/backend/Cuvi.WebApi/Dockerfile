FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Cuvi.WebApi/Cuvi.WebApi.csproj", "Cuvi.WebApi/"]
RUN dotnet restore "Cuvi.WebApi/Cuvi.WebApi.csproj"
COPY . .
WORKDIR "/src/Cuvi.WebApi"
RUN dotnet build "Cuvi.WebApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Cuvi.WebApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Cuvi.WebApi.dll"]
