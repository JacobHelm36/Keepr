<template>
<div class="addVault">
  <button
    type="button"
    class="btn btn-primary"
    data-toggle="modal"
    data-target="#addVaultModal"
    >Add Vault</button>
    <div class="modal" tabindex="-1" role="dialog" id="addVaultModal">
      <form class="form-inline" @submit.prevent="addVault">
        <div class="modal-content form-group rounded input-group-default container">
          <div class="modal-header d-flex flex-column">
            <h2 class="text-white">Create a vault</h2>
            <div class="form-group-inline my-1 row">
              <h5 class="text-white mt-2 col-5">Title:</h5>
              <input
                class="modal-title rounded form-control p-0 text-center col-7"
                placeholder="Give this a name"
                aria-describedby="inputGroup-sizing-default"
                v-model="newVault.name"
              />
            </div>
            <div class="form-group-inline my-1 row">
              <h5 class="text-white mt-2 col-5">Description:</h5>
              <input
                class="modal-title rounded form-control p-0 text-center col-7"
                placeholder="Describe?"
                aria-describedby="inputGroup-sizing-default"
                v-model="newVault.description"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#addVaultModal"
            >Submit</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </form>
    </div>
</div>

</template>


<script>
export default {
  name: "AddVaultModal",
  data() {
    return {
      newVault: {
        name: this.name,
        description: this.description
      }
    }
  },
  methods: {
    addVault() {
      this.$store.dispatch("addVault", this.newVault);
    }
  }
}  
</script>

<style scoped>
.modal-content {
  background-color: black;
}
.form-group-inline {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.title {
  width: 100%;
}
</style>