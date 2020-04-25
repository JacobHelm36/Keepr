<template>
  <div class="dashboard container-fluid">
    <h1 class="text-center">The important stuff</h1>
    <h3>Your Keeps:<AddKeep /></h3>
    <div class="row">
      <keepCards v-for="keepObj in userKeeps" :key="keepObj.id" :keepData="keepObj" />
    </div>
      <h3>Your Vaults:<AddVault /></h3>
    <div class="row">
      <vaultCards v-for="vaultObj in userVaults" :key="vaultObj.id" :vaultData="vaultObj" />
    </div>
  </div>
</template>

<script>
import VaultCards from "../components/VaultCards";
import KeepCards from "../components/keepCards";
import AddVault from "../components/AddVaultsModal";
import AddKeep from "../components/AddKeepModal"
export default {
  mounted() {
    this.$store.dispatch("getUserKeeps"),
    this.$store.dispatch("getUserVaults")
  },
  computed: {
    userKeeps() {
      return this.$store.state.userKeeps;
    },
    userVaults() {
      return this.$store.state.userVaults;
    }
  },
  components: {KeepCards,
  VaultCards,
  AddVault,
  AddKeep}
};
</script>

<style></style> 
