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

    internal Vault Get(int id)
    {
      Vault found = _repo.Get(id);
      if (found == null)
      {
        throw new Exception("Invalid Id");
      }
      return found;
    }

    internal Vault Create(Vault newVault)
    {
      return _repo.Create(newVault);
    }

    internal Vault Delete(int id, string userId)
    {
      Vault found = Get(id);
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