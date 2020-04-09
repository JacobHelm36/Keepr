using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  public class VaultsKeepsService
  {
    private readonly VaultsKeepsRepository _repo;
    public VaultsKeepsService(VaultsKeepsRepository repo)
    {
      _repo = repo;
    }

    internal IEnumerable<VaultKeep> GetVaultKeepsByVaultId(int vaultId)
    {
      return _repo.GetByVaultId(vaultId);
    }

    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      return _repo.Create(newVaultKeep);
    }
    internal VaultKeep Delete(int id, string userId)
    {
      VaultKeep found = _repo.Get(id);
      if (found.UserId != userId)
      {
        throw new Exception("Invalid Request");
      }
      if (_repo.Delete(id))
      {
        return found;
      }
      throw new Exception("Something bad happened");
    }
  }

}