<template>
  <div class="character">
    <h2 class="character-name">{{ getCharacter.name }}</h2>
    <div class="character-image">
      <img :src="getCharacter.image" alt="" />
    </div>
    <ul class="character-data">
      <li>Created: {{ getCharacter.created }}</li>
      <li>Gender: {{ getCharacter.gender }}</li>
      <li>Episodes: {{ getCharacter.episode.length }}</li>
      <li>Location: {{ getCharacter.location.name }}</li>
      <li>Species: {{ getCharacter.species }}</li>
      <li>Status: {{ getCharacter.status }}</li>
      <li v-if="getCharacter.type">Type: {{ getCharacter.type }}</li>
    </ul>
    <div class="return-to-main">
      <button @click="goBackToCharacters">Back</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params["id"],
    };
  },
  computed: {
    ...mapGetters("character", ["getCharacter"]),
  },
  methods: {
    goBackToCharacters() {
      this.$router.push("/");
    },
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    },
  },
};
</script>

<style lang="sass">
.character
  width: 100%
  .character-name
    width: 100%
    height: auto
    padding: 20px 0px
    text-align: center
    background-color: rgba(0,0,100, 0.1)

  .character-image
    height: auto
    display: flex
    justify-content: center
    align-items: center

  .character-data
    width: 100%
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    li
      width: 20%
      list-style: none
      background-color: rgba(0,100,100, 0.1)
      border: 1px solid black
      box-sizing: border-box
      border-bottom: none
      padding: 15px 0px
      &:last-child
        border-bottom: 1px solid black
        
  .return-to-main
    display: flex
    justify-content: center
    align-item: center
    button
      width: 95px
      height: 40px
      font-size: 16px
      font-weight: 700
      border-radius: 3px
      border: 1px solid #727272
      background-color: rgb(255,255,255)
      &:hover
        background-color: rgba(0, 100, 100, 0.1)
        transform: translate(0%)
        transition: 0.5s
</style>