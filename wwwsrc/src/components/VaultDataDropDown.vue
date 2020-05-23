<template>
  <div class="VaultDataDropDown">

      <div class="dropdown-vaults" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" @click="addKeepToVault" value="vaultObj.id">{{vaultItem.name}}</a>
        <a class="dropdown-item">add a vault
          <AddVault />
        </a>
      </div>

  </div>
</template>


<script>
import AddVault from "../components/AddVaultsModal";
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
  components:{AddVault},
  props: ["vaultItem",
  ]
}
</script>


<style scoped>

</style>