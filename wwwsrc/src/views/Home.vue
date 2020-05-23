<template>
  <div class="home">
    <h1 class="text-center mt-3">The forum for everybody's posts.</h1>
      <div class="search-wrapper">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="search" />
      </div>
      <AddKeep v-if="this.$auth.isAuthenticated" class="text-center mb-4 mt-3" />
    <div class="d-flex sidebar-wrapper" id="wrapper">
      <!-- sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <img src="happyCloud.jpeg" id="cloud" alt="...">
      <div class="sidebar-heading">Features coming soon </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Popular</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
      </div>
    </div>
    <!-- page content -->
    <div id="page-content-wrapper">
      <button class="btn btn-primary" @click="toggle()" id="menu-toggle">Toggle Menu</button>
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
    },
    userVaults() {
      return this.$store.state.userVaults;
    }
  },
  methods: {
    toggle() {
        $("#wrapper").toggleClass("toggled1 sidebar-wrapper");
    },
    logout() {
      this.$store.dispatch("logout");
    }, 
    swal(){
      if(!this.$auth.isAuthenticated){
        Swal.fire("For more functionality login or create an account");
      } else {
        this.$store.dispatch("getUserVaults");
      }
    }
  },
  async mounted() {
    this.$store.dispatch("getKeeps");
    setTimeout(this.swal, 1000);
  },
  components: {
    KeepCards,
    AddKeep
  }
};
</script>


<style scoped>
#cloud {
  height:100px;
  width: 120px;
  background: transparent;
}
.sidebar-wrapper {
  min-height: 80vh;
  margin-left: -15rem;
  transition: .5s ease-in-out;
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

.toggled1 {
  margin-left: 0;
  transition: .5s ease-in-out;
}

/* .toggled2 {
  margin-left: -15rem;
  transition: .5s ease-out;
} */

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }


  .search-wrapper {
    width: 50%;
    margin-left: 25%;
  }
}
</style>
