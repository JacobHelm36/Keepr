using System;
using System.Collections.Generic;
using Keepr.Models;
using Keepr.Services;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Keepr.Controllers
{
  [ApiController]
  [Route("api/[controller")]
  public class VaultsKeepsController : BaseController
  {
    private readonly VaultsKeepsService _vks;

    public VaultsKeepsController(VaultsKeepsService vks)
    {
      _vks = vks;
    }

    [HttpPost]
    [Authorize]
    public ActionResult<VaultKeep> Create([FromBody] VaultKeep newVaultKeep)
    {
      try
      {
          string userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
          newVaultKeep.Id = userId;
          return Ok(_vks.Create(newVaultKeep));
      }
      catch (Exception e)
      {
          return BadRequest(e.Message);
      }
    }
  }
}