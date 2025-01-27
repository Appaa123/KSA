using Microsoft.AspNetCore.Mvc;
using NuGet.Common;

namespace KSAApi.Services;

public class KSAServcie: IKSAService {

CowStock cowStock = new CowStock();

public async Task<CowStock> getRandomCowStock() {

    cowStock.Date = new DateOnly();
    cowStock.Type = "Dry Grass";
    cowStock.Days = 30;
    cowStock.Quantity = 500;
    cowStock.Summary = "This is the cowstock for a month to all the cows in KS";

    return cowStock;
}

}