<template>
  <div class="home">
    <h1 class="text-center mt-3">The forum for everybody's posts.</h1>
      <div class="search-wrapper">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="search" />
      </div>
      <AddKeep v-if="this.$auth.isAuthenticated" class="text-center mb-4 mt-3" />
    <div class="d-flex" id="wrapper">
      <!-- sidebar -->
    <div class="bg-light border-right" v-bind:style="" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Popular</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>
    <div id="page-content-wrapper">
      <button class="btn btn-primary" @click="toggle" id="menu-toggle">Toggle Menu</button>
      <div class="container-fluid">
        <div class="row mt-3">
          <keepCards v-for="keep in filteredList" :key="keep.id" :keepData="keep" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ContentBar from "../components/ContentBar"
import KeepCards from "../components/keepCards";
import AddKeep from "../components/AddKeepModal";
import Swal from 'sweetalert2'
export default {
  name: "home",
  data() {
    return {
      search: "",
      sideBar: ""
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
    toggle() {
      $("#menu-toggle").click(function(e) {
        e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    })
    },
    logout() {
      this.$store.dispatch("logout");
    }
  },
  async mounted() {
    this.$store.dispatch("getKeeps");
    if (await this.$auth.isAuthenticated) {
      this.$store.dispatch("getUserVaults");
    } 
    // else {
    //   Swal.fire("For more functionality login or create an account")
    // }
  },
  components: {
    KeepCards,
    AddKeep,
    ContentBar
  }
};
</script>


<style scoped>
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

/* #wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
} */

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }

  .search-wrapper {
    width: 50%;
    margin-left: 25%;
  }
}
</style>
