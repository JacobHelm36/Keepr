using System;
using System.Collections.Generic;
using System.Data;
using Keepr.Models;
using Keepr.Repositories;

namespace Keepr.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;
        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Keep> Get()
        {
            return _repo.Get();
        }

        public IEnumerable<Keep> GetUserKeeps(string userId)
        {
            return _repo.GetUserKeeps(userId);
        }

        internal Keep GetById(int id)
        {
            Keep found = _repo.GetById(id);
            if (found == null)
            {
                throw new Exception("Invalid Id");
            }
            return found;
        }

        internal IEnumerable<VaultKeepViewModel> GetByVaultId(int vaultId, string userId)
        {
            return _repo.GetByVaultId(vaultId, userId);
        }

        internal Keep Edit(Keep editedKeep)
        {
            //get Id after its created
            Keep found = GetById(editedKeep.Id);
            if (found.UserId != editedKeep.UserId)
            {
                throw new Exception("Invalid Request");
            }
            found.Name = editedKeep.Name;
            found.Description = editedKeep.Description;
            found.Img = editedKeep.Img;
            return _repo.Edit(found);
        }

        public Keep Create(Keep newKeep)
        {
            return _repo.Create(newKeep);
        }

        public Keep Delete(int id, string userId)
        {
            Keep found = GetById(id);
            if (found.UserId != userId)
            {
                throw new Exception("Invalid Request");
            }
            if (_repo.Delete(id))
            {
                return found;
            }
            throw new Exception("Something is wrong here");
        }
    }
}