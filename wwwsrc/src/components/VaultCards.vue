<template>
  <div class="vaultCards m-2" >
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">{{vaultData.name}}</h3>
        <p class="card-text">{{vaultData.description}}</p>
        <router-link :to="{ name: 'vaultKeeps', params:{id:vaultData.id} }">
          <button @click="setActiveVault">View vault</button>
        </router-link>
        <button v-if="vaultData.userId == this.$auth.user.sub" @click="deleteVault" class="btn-danger">Delete Vault</button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'vaultCards',
  mounted() {
  },
  data(){
    return {}
  },
  computed:{
  },
  methods:{
    setActiveVault() {
      this.$store.dispatch("setActiveVault", this.vaultData);
    },
    deleteVault() {
      this.$store.dispatch("deleteVault", this.vaultData)
    }
  },
  components:{},
  props: ["vaultData"]
}
</script>


<style scoped>

</style>