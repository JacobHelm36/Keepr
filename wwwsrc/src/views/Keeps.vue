<template>
  <div class="keeps container-fluid bg-dark text-white">
    <p>These are your Keeps</p>
    <AddKeep />
    <div class="row">
        <keepCards v-for="keepObj in publicKeeps" :key="keepObj.id" :keepData="keepObj" />
    </div>
  </div>
</template>


<script>
import KeepCards from "../components/keepCards";
import AddKeep from "../components/AddKeepModal";
export default {
  name: 'Keeps',
  mounted() {
    this.$store.dispatch("getKeeps");
  },
  data(){
    return {}
  },
  computed:{
    publicKeeps() {
      return this.$store.state.publicKeeps;
    }
  },
  methods:{},
  components:{
    KeepCards,
    AddKeep
  }
}
</script>


<style scoped>

</style>