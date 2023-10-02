FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["Cuvi/Cuvi.csproj", "Cuvi/"]
RUN dotnet restore "Cuvi/Cuvi.csproj"
COPY . .
WORKDIR "/src/Cuvi"
RUN dotnet build "Cuvi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Cuvi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Cuvi.dll"]
