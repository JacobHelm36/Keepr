using System;
using System.Collections.Generic;
using System.Data;
using Dapper;
using Keepr.Models;

namespace Keepr.Repositories
{
  public class VaultsKeepsRepository
  {
    private readonly IDbConnection _db;
    public VaultsKeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal VaultKeep Get(int id)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE Id = @id";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { Id = id});

    }

    internal IEnumerable<VaultKeep> GetByVaultId(int VaultId)
    {
      string sql = "SELECT * FROM vaultkeeps WHERE vaultId = @VaultId";
      return _db.Query<VaultKeep>(sql, new { VaultId });
    }

    internal VaultKeep Create(VaultKeep newVaultKeep)
    {
      string sql = @"
      INSERT INTO vaultkeeps
      (vaultId, keepId, userId)
      VALUES
      (@VaultId, @KeepId, @UserId);
      SELECT LAST_INSERT_ID()";
      newVaultKeep.Id = _db.ExecuteScalar<int>(sql, newVaultKeep);
      return newVaultKeep;
    }

    internal bool Delete(int Id)
    {
      string sql = "DELETE FROM vaultkeeps WHERE id =@Id LIMIT 1";
      int removed = _db.Execute(sql, new { Id });
      return removed == 1;
    }
  }
}