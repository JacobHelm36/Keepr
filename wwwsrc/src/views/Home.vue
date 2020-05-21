<template>
  <div class="home">
    <h1 class="text-center mt-3">The forum for everybody's posts.</h1>
    <div class="keeps container-fluid">
      <div class="search-wrapper">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="search" />
      </div>
      <AddKeep class="text-center mb-4 mt-3" />
      <div class="row">
        <keepCards v-for="keep in filteredList" :key="keep.id" :keepData="keep" />
      </div>
    </div>
  </div>
</template>

<script>
import KeepCards from "../components/keepCards";
import AddKeep from "../components/AddKeepModal";
export default {
  name: "home",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    filteredList() {
      return this.publicKeeps.filter(keep => {
        return keep.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    publicKeeps() {
      return this.$store.state.publicKeeps;
      console.log(this.$store.state.publicKeeps);
    },
    userVaults() {
      return this.$store.state.userVaults;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  async mounted() {
    this.$store.dispatch("getKeeps");
    if (await this.$auth.isAuthenticated) {
      this.$store.dispatch("getUserVaults");
    }
  },
  components: {
    KeepCards,
    AddKeep
  }
};
</script>


<style scoped>
</style>
