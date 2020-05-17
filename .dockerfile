FROM microsoft/dotnet:3.1.2-sdk
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet keepr.dll