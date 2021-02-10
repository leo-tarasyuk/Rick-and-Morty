<template>
  <div class="main">
    <h2 class="logo">Characters of Rick and Morty</h2>
    <ul class="list-of-characters">
      <router-link
        v-for="item in getResults"
        :key="item.id"
        class="character"
        :to="'/character/' + item.id"
        custom
        v-slot="{ navigate }"
      >
        <li @click="navigate" role="link">
          <p @click="sendDataCharacter(item)">{{ item.name }}</p>
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
    ...mapGetters("main", ["getInfo"]),
    ...mapGetters("main", ["getResults"]),
  },
  methods: {
    ...mapActions("main", ["setInfo"]),
    ...mapActions("main", ["setResults"]),
    ...mapActions("character", ["setCharacter"]),
    sendDataCharacter(data) {
      this.setCharacter(data);
    },
    handleScroll(event) {
      const fullHeight = document.querySelector(".main").clientHeight;
      const currentHeight = event.path[1].innerHeight;
      const scrollHeigth = event.path[1].scrollY;
      if (fullHeight == currentHeight + scrollHeigth && this.getInfo.next) {
        fetch(this.getInfo.next)
          .then((response) => response.json())
          .then((data) => {
            this.setInfo(data.info);
            data.results.map((item) => {
              this.getResults.push(item);
            });
          });
      }
    },
  },
  created() {
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((data) => {
        this.setInfo(data.info);
        this.setResults(data.results);
      });
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="sass">
.main
  width: 100%
  position: relative
  .logo
    width: 100%
    height: auto
    padding: 20px 0px
    text-align: center
    background-color: rgba(0,0,100, 0.1)
  .list-of-characters
    width: 100%
    display: flex
    flex-direction: column
    justify-content: center
    aligb-items: center
    text-align: center
    .character
      width: 100%
      list-style: none
      background-color: rgba(0,100,100, 0.1)
      border: 1px solid black
      box-sizing: border-box
      border-bottom: none
      p
        padding: 20px 0px
        &:hover
          background-color: rgba(0, 100, 100, 0.1)
</style>
