using KSAApi;

public interface IKSAService{
    public Task<CowStock> getRandomCowStock();
}