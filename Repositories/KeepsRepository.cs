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
            string sql = "SELECT * FROM Keeps WHERE isPrivate = 0;";
            return _db.Query<Keep>(sql);
        }

        internal Keep Get(int id)
        {
            string sql = "SELECT * FROM keeps WHERE id = @Id";
            return _db.QueryFirstOrDefault<Keep>(sql, new { Id = id });
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
            (userId, name, description, img, isPrivate, views, shares, keeps)
            VALUES
            (@UserId, @Name, @Description, @Img, @IsPrivate, @Views, @Shares, @Keeps);
            ";
            int id = _db.ExecuteScalar<int>(sql, KeepData);
            KeepData.Id = id;
            // KeepData.IsPrivate set to nothing... or true
            KeepData.IsPrivate = false;
            return KeepData;
        }

        internal bool Delete(int Id)
        {
            string sql = "DELETE FROM keeps WHERE id = @id";
            int removed = _db.Execute(sql, new { Id });
            return removed == 1;
        }
    }
}