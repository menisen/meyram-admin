import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore('globalStore',()=>{
    const profile = ref(null)
    function updateProfile(value){
        profile.value = value
    }
    return  { profile, updateProfile}
})