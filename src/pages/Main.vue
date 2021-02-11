<template>
  <div class="main">
    <h2 class="logo">Characters of Rick and Morty</h2>
    <ul class="list-of-characters" ref="list_character">
      <router-link
        v-for="item in getResults"
        :key="item.id"
        class="character"
        :to="'/character/' + item.id"
        custom
        v-slot="{ navigate }"
      >
        <li @click="navigate" role="link">
          <p @click="setCharacter(item)">{{ item.name }}</p>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SERVER_URL } from "../api";

export default {
  computed: {
    ...mapGetters("main", ["getInfo", "getResults"]),
  },
  methods: {
    ...mapActions("main", ["setInfo", "setResults"]),
    ...mapActions("character", ["setCharacter"]),

    onScroll(event) {
      const fullScroll = event.target.scrollHeight - event.target.clientHeight;

      if (fullScroll == event.target.scrollTop)
        this.requestData(this.getInfo.next);
    },
    getDataForList() {
      if (!this.getResults.length) 
        this.requestData(SERVER_URL);
    },
    requestData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.$refs.list_character.removeEventListener("scroll", this.onScroll);
          this.setInfo(data.info);
          this.setResults(data.results);
          this.$refs.list_character.addEventListener("scroll", this.onScroll);
        });
    },
  },
  created() {
    this.getDataForList();
  },
  beforeDestroy() {
    this.$refs.list_character.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="sass">
.logo
  width: 100%
  height: 70px
  display: flex
  justify-content: center
  align-items: center
  background-color: rgba(0,0,100, 0.1)

.list-of-characters
  width: 100%
  height: calc(100vh - 70px)
  overflow-y: scroll
  display: flex
  flex-direction: column

  .character
    width: 100%
    list-style: none
    background-color: rgba(0,100,100, 0.1)
    border: 1px solid black
    box-sizing: border-box
    border-bottom: none
    display: flex
    justify-content: center
    align-items: center

    p
      width: 100%
      padding: 20px 0px
      text-align: center
      &:hover
        background-color: rgba(0, 100, 100, 0.1)
</style>
