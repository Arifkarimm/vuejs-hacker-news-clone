<template>
  <div class="container">
    <Item v-for="story in stories" :key="story.data.id" :story="story" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import axios from "axios";
export default {
  name: "Homepage",
  data() {
    return {
      err: "",
      stories: []
    };
  },
  components: {
    Item
  },
  created() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(response => {
        this.response = response.data.slice(0, 10);
        // console.log(this.stories);
        this.response.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(response => {
              this.stories.push(response);
            })
            .catch(err => {
              this.err = err;
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  }
};
</script>

<style scoped></style>
