<template>
  <div class="text-center">
    <div v-for="rankitem in ranklist" class="border-b-1 border-gray-600 py-2 w-full  ">
        #{{ ranklist.indexOf(rankitem) + 1 }} {{ rankitem.username }} - {{ rankitem.points }}
    </div>
  </div>
</template>

<script lang="ts">
import { request } from "../api";
import { defineComponent } from "vue";

interface rankitem {
    username: string;
    points: number;
}

export default defineComponent({
  name: "RankCard",
  data() {
    return {
        ranklist: []
    };
  },
  mounted(): void {
    request('/rank/get').then((ranklist) => {
        this.ranklist = ranklist;
        this.ranklist.sort((a: rankitem, b: rankitem) => {
            return b.points - a.points;
        })
    })
  },
});
</script>

<style scoped lang="scss">
</style>
