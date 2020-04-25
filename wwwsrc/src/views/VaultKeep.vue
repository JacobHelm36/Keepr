<template>
  <div class="VaultKeep">
    <div class="text-center">
      <h2 class="text-white">Your Vault with all the keeps</h2>
      <div class="row ml-3">
        <keepCards v-for="keep in vaultKeeps" :key="keep.id" :keepData="keep" />
      </div>
    </div>


  </div>
</template>


<script>
import KeepCards from "../components/keepCards"
export default {
  name: 'VaultKeep',
  data(){
    return {}
  },
  mounted() {
    this.$store.dispatch("getVaultKeep", this.$route.params.id)
  },
  computed:{
    vaultKeeps() {
      return this.$store.state.vaultKeeps;
    }
  },
  methods:{},
  components:{
    KeepCards
  },
  prop: []
}
</script>


<style scoped>

</style>