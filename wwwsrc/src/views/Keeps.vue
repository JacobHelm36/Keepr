<template>
  <div class="keeps container-fluid bg-dark">
    <p class="text-white mt-3 pt-3">These are your Keeps</p>
    <AddKeep />
    <div class="row pb-3">
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