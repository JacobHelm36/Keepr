using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Keepr.Models;
using Keepr.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Keepr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
        public class VaultsController : ControllerBase
    {
        private readonly VaultService _vs;
        private readonly VaultsKeepsService _vks;
        private readonly KeepsService _ks;
        public VaultsController(VaultService vs, VaultsKeepsService vks, KeepsService ks)
        {
            _vs = vs;
            _vks = vks;
            _ks = ks;
        }

        // [HttpGet]
        // public ActionResult<IEnumerable<Vault>> Get()
        // {
        //     try
        //     {
        //         return Ok(_vs.Get());
        //     }
        //     catch (Exception e)
        //     {
        //         return BadRequest(e.Message);
        //     }
        // }

        [HttpGet("myVaults")]  // api/blogs/myblogs
        public ActionResult<IEnumerable<Vault>> GetUserVaults()
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_vs.GetUserVaults(userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public ActionResult<Vault> Get(int id)
        {
          try
          {
              string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
              return Ok(_vs.Get(id, userId));
          }
          catch (Exception e)
          {
              return BadRequest(e.Message);
          }
        }

        [HttpGet("{id}/keeps")]
        [Authorize]
        // finds a vaultkeep by vault id
        public ActionResult<IEnumerable<VaultKeepViewModel>> GetKeepsByVaultId(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_ks.GetByVaultId(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        //Creates a vault
        [Authorize]
        public ActionResult<Vault> Create([FromBody] Vault newVault)
        {
          try
          {
              string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
              newVault.UserId = userId;
              return Ok(_vs.Create(newVault));
          }
          catch (Exception e)
          {
              return BadRequest(e.Message);
          }
        }

        [HttpDelete("{id}")]
        // Deletes a vault
        [Authorize]
        public ActionResult<Vault> Delete(int id)
        {
            try
            {
                string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return Ok(_vs.Delete(id, userId));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}