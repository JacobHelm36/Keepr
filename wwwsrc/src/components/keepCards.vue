<template>
  <div class="list m-2">
    <div class="card" style="width: 18rem;">
      <img :src="keepData.img" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{keepData.name}}</h5>
        <p class="card-text">{{keepData.description}}</p>
        <button
          v-if="this.$route.name == 'dashboard' || this.$route.name == 'home' && keepData.userId == checkUser"
          @click="deleteKeep"
          class="btn-danger"
        >Delete Keep</button>
        <div v-if="$auth.isAuthenticated" class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Choose a vault</button>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              class="dropdown-item"
              href="#"
              v-for="vault in userVaults"
              :key="vault.id"
              @click="createVaultKeep(keepData.id, vault.id)"
            >{{vault.name}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import AddVault from "../components/AddVaultsModal"
export default {
  name: "keepCards",
  mounted() {},
  data() {
    return {
      user: null
    };
  },
  computed: {
    checkUser() {
      if (this.$auth.user == undefined) {
        return (this.user = null);
      }
      if (this.$auth.user.sub) {
        return this.$auth.user.sub;
      }
    },
    userVaults() {
      return this.$store.state.userVaults;
    }
  },
  methods: {
    deleteKeep() {
      this.$store.dispatch("deleteKeep", this.keepData);
    },
    createVaultKeep(keepId, vaultId) {
      let vaultKeepObj = { keepId: keepId, vaultId: vaultId };
      this.$store.dispatch("createVaultKeep", vaultKeepObj);
    },
    testBtn() {
      debugger;
      console.log(this.$store.state.userVaults);
    }
  },
  components: {AddVault},
  props: ["keepData", "vaults"]
};
</script>

<style scoped>
div.dropdown-menu.show {
  text-align: center
}
</style>