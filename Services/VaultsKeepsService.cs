using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
  private readonly VaultsKeepsRepository _repo;
  public VaultsKeepsService(VaultsKeepsRepository repo)
  {
    _repo = repo;
  }

  internal VaultKeep Create(VaultKeep newVaultKeep)
  {
    return _repo.Create(newVaultKeep);
  }
}