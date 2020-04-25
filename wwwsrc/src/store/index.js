import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost")
  ? "https://localhost:5001/"
  : "/";

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    publicKeeps: [],
    keepById: {},
    userKeeps: [],
    userVaults: [],
    activeVault: [],
    vaultKeeps: []
  },
  mutations: {
    setKeeps(state, keeps) {
      state.publicKeeps = keeps
    },
    setKeepById(state, keepById) {
      state.keepById = keepById
    },
    addKeep(state, keep) {
      if(keep.isPrivate = false) {
        state.publicKeeps.push(keep);
      }
    },
    userKeeps(state, userKeeps) {
      state.userKeeps = userKeeps
    },
    removeKeep(state, keepId) {
      state.publicKeeps = state.publicKeeps.filter(k => k.id !=keepId)
      state.userKeeps = state.userKeeps.filter(ki => ki.id != keepId)
    },

    userVaults(state, userVaults) {
      state.userVaults = userVaults;
    },
    activeVault(state, activeVault) {
      state.activeVault = activeVault
    },
    addVault(state, newVault) {
      state.userVaults.push(newVault)
    },
    removeVault(state, vaultId) {
      state.userVaults = state.userVaults.filter(v => v.id != vaultId)
    },
    activeVaultKeep(state, vaultKeep) {
      state.vaultKeeps = vaultKeep
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    // Keeps Actions
    async getKeeps({commit, dispatch}) {
      let res = await api.get("keeps");
      commit("setKeeps", res.data);
    },
    async getKeepsById({commit, dispatch}, keep) {
      let res = await api.get(`keeps/${keep.id}`);
      commit("setKeepById", res.data);
    },
    async addKeep({ commit }, newKeep) {
      let res = await api.post("keeps", newKeep);
      commit("addKeep", res.data);
    },
    async getUserKeeps({commit}) {
      let res = await api.get("keeps/myKeeps");
      commit("userKeeps", res.data)
    },
    async deleteKeep({commit}, keepData) {
      await api.delete(`keeps/${keepData.id}`)
      commit("removeKeep", keepData.id)
    },


    // Vaults Actions
    async getUserVaults({commit}) {
      let res = await api.get("vaults/myVaults")
      commit("userVaults", res.data)
    },
    async setActiveVault({commit}, vault) {
      let res = await api.get(`vaults/${vault.id}`)
      commit("activeVault", res.data)
    },
    async addVault({commit}, newVault) {
      let res = await api.post("vaults", newVault)
      commit("addVault", res.data)
    },
    async deleteVault({commit}, vaultData) {
      await api.delete(`vaults/${vaultData.id}`)
      commit("removeVault", vaultData.id)
    },


    // VaultKeeps Actions
    async setActiveVaultKeep({commit}, vaultData) {
      commit("activeVaultKeep", vaultData)
    },
    async getVaultKeep({commit}, vaultData) {
      let res = await api.get(`vaults/${vaultData}/keeps`)
      commit("activeVaultKeep", res.data)
    },
    async createVaultKeep({commit}, vaultKeepData) {
      debugger
      await api.post("vaultKeeps", vaultKeepData)
    },
    async deleteVaultKeep({commit}, vaultKeepId) {
      await api.delete(`vaultKeeps/${vaultKeepId.id}`)
    }
  }
});
