<template>
  <div class="home">
    <h1 class="text-center mt-3">Welcome Home</h1>
      <div class="keeps container-fluid">
      <AddKeep class="text-center mb-4 mt-3" />
      <div class="search-wrapper">
        <input class="form-control" type="text" v-model="search" placeholder="  search..." />
      </div>
      <div class="row">
          <keepCards v-for="keepObj in publicKeeps" :key="keepObj.id" :keepData="keepObj" />
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
    user() {
      return this.$store.state.user;
    },
    publicKeeps() {
      return this.$store.state.publicKeeps;
    },
    },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
    mounted() {
    this.$store.dispatch("getKeeps");
  },
  methods:{},
  components:{
    KeepCards,
    AddKeep
  }
};
</script>
