using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Dapper;

namespace Keepr.Repositories
{
    public class KeepsRepository
    {
        private readonly IDbConnection _db;

        public KeepsRepository(IDbConnection db)
        {
            _db = db;
        }

        internal IEnumerable<Keep> Get()
        {
            string sql = "SELECT * FROM keeps WHERE isPrivate = 0;";
            return _db.Query<Keep>(sql);
        }

        internal IEnumerable<Keep> GetUserKeeps(string UserId)
        {
        string sql = "SELECT * FROM keeps WHERE userId = @UserId";
        return _db.Query<Keep>(sql, new { UserId });
        }

        internal Keep GetById(int id)
        {
            string sql = "SELECT * FROM keeps WHERE id = @Id";
            return _db.QueryFirstOrDefault<Keep>(sql, new { Id = id });
        }

        internal IEnumerable<VaultKeepViewModel> GetByVaultId(int vaultId, string userId)
        {
            string sql = @"
                SELECT 
                k.*,
                vk.id as vaultKeepId
                FROM vaultkeeps vk
                INNER JOIN keeps k ON k.id = vk.keepId 
                WHERE (vaultId = @vaultId AND vk.userId = @userId) ";
            return _db.Query<VaultKeepViewModel>(sql, new { vaultId, userId });
        }

        internal Keep Edit(Keep EditedKeep)
        {
            string sql = @"
            UPDATE keeps
            SET
                name = @Name,
                img = @Img,
                description = @Description
            WHERE id = @Id;
            ";
            _db.Execute(sql, EditedKeep);
            return EditedKeep;
        }

        internal Keep Create(Keep KeepData)
        {
            string sql = @"
            INSERT INTO keeps
            (userId, name, description, img, isPrivate)
            VALUES
            (@UserId, @Name, @Description, @Img, @IsPrivate);
            SELECT LAST_INSERT_ID()
            ";
            // if (KeepData.IsPrivate == true)
            // {
            //     KeepData.IsPrivate = true;
            // }
            // if (KeepData.IsPrivate == false)
            // {
            //     KeepData.IsPrivate = false;
            // }
            int id = _db.ExecuteScalar<int>(sql, KeepData);
            KeepData.Id = id;
            return KeepData;
        }


        internal bool Delete(int Id)
        {
            string sql = "DELETE FROM keeps WHERE id = @id LIMIT 1";
            int removed = _db.Execute(sql, new { Id });
            return removed == 1;
        }
    }
}