<template>
  <div class="dashboard container-fluid">
    <h1>WELCOME TO THE DASHBOARD</h1>
    <AddVault />
    <div class="row">
      <keepCards v-for="keepObj in userKeeps" :key="keepObj.id" :keepData="keepObj" />
    </div>
    <div class="row">
      <vaultCards v-for="vaultObj in userVaults" :key="vaultObj.id" :vaultData="vaultObj" />
    </div>
  </div>
</template>

<script>
import VaultCards from "../components/VaultCards";
import KeepCards from "../components/keepCards";
import AddVault from "../components/AddVaultsModal";
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
  AddVault}
};
</script>

<style></style> 
