<template>
  <div class="addKeep">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#addKeepModal"
    >Add Keep</button>
    <div class="modal" tabindex="-1" role="dialog" id="addKeepModal">
      <form class="form-inline" @submit.prevent="addKeep">
        <div class="modal-content form-group rounded input-group-default container">
          <div class="modal-header d-flex flex-column">
            <h2 class="text-white">Create a keep</h2>
            <div class="form-group-inline my-1 row">
              <h5 class="text-white mt-2 col-5">Image:</h5>
              <input
                class="modal-title rounded form-control p-0 text-center col-7"
                placeholder="What's your image?"
                aria-describedby="inputGroup-sizing-default"
                v-model="newKeep.img"
              />
            </div>
            
            <div class="form-group-inline my-1 row">
              <h5 class="text-white mt-2 col-5">Name:</h5>
              <input
                class="modal-title rounded form-control p-0 text-center col-7"
                placeholder="Give this a name"
                aria-describedby="inputGroup-sizing-default"
                v-model="newKeep.name"
              />
            </div>
            <div class="form-group-inline my-1 row">
              <h5 class="text-white mt-2 col-5">Description:</h5>
              <input
                class="modal-title rounded form-control p-0 text-center col-7"
                placeholder="How would you describe this?"
                aria-describedby="inputGroup-sizing-default"
                v-model="newKeep.description"
              />
            </div>
            <input type="radio" id="0" value=0 v-model="picked">
            <label for="0">Public</label>
            <br>
            <input type="radio" id="1" value=1 v-model="picked">
            <label for="1">Private</label>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="modal"
              data-target="#addKeepModal"
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
  name: 'addKeep',
  data(){
    return {
      newKeep: {
        name: "",
        description: "",
        img: "",
        isPrivate: this.picked
      },
      picked: Boolean
    }
  },
  computed:{},
  methods:{
    addKeep() {
      this.$store.dispatch("addKeep", this.newKeep)
    }
  },
  components:{}
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