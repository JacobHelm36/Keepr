<template>
  <div class="VaultKeep">
    <div class="text-center">
      <p>Your Vault with all the keeps</p>

    </div>


  </div>
</template>


<script>
export default {
  name: 'VaultKeep',
  data(){
    return {}
  },
  mounted() {
    this.$store.dispatch("getVaultKeep", this.$route.params.id)
  },
  computed:{},
  methods:{},
  components:{},
  prop: []
}
</script>


<style scoped>

</style>