<template>
  <div class="VaultDataDropDown">

      <div class="dropdown-vaults" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="addKeepToVault" value="vaultObj.id">{{vaultItem.name}}</a>
      </div>

  </div>
</template>


<script>
export default {
  name: "VaultDataDropDown",
  data(){
    return {}
  },
  computed:{},
  methods:{
    addKeepToVault() {
      this.$store.dispatch("addKeepToVault", this.vaultItem)
    }
  },
  components:{},
  props: ["vaultItem"]
}
</script>


<style scoped>

</style>