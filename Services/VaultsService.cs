using Keepr.Repositories;
using Keepr.Models;
using System.Collections.Generic;
using System;

namespace Keepr.Services
{
  public class VaultService
  {
    private readonly VaultsRepository _repo;
    public VaultService(VaultsRepository repo)
    {
      _repo = repo;
    }

        internal IEnumerable<Vault> Get()
        {
            return _repo.GetPublic();
        }

    internal IEnumerable<Vault> GetUserVaults(string userId)
    {
        return _repo.GetUserVaults(userId);
    }

    internal Vault Get(int id, string userId)
    {
      Vault found = _repo.Get(id);
      if (found == null)
      {
        throw new Exception("Invalid Id");
      }
      if (found.UserId != userId)
      {
        throw new Exception("You are not the owner");
      }
      return found;
    }

    internal Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }

    internal Vault Delete(int id, string userId)
    {
      Vault found = Get(id, userId);
      if (found.UserId != userId)
      {
        throw new Exception("Invalid Request");
      }
      if(_repo.Delete(id))
      {
        return found;
      }
      throw new Exception("Something bad happened");
    }


  }
}