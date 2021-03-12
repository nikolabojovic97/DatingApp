using Entities;

namespace API.Services.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}