<template>
  <div class='container'>
    <div v-if="content[0].title" class='container__title'>
      <h1>{{content[0].title}}</h1>
    </div>
    <div v-if="content[0].info.length>0" class='container__text'>
      <p v-for="(t, index) in content[0].info" :key="index">{{t}}</p>
    </div>
    <div v-if="content[0].svg" class='container__img'>
     <img src="" alt="">
    </div>
  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import BackgroundShapes from './components/BackgroundShapes.vue'
// import Portfolio from './components/Portfolio.vue'

export default {
  name: "App",
  data() {
    return {
      content: [
        {
          title: "what you want to buy",
          info: [
            "A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic",
            " tales, folk tales, fairy tales, fables and anecdotes in various ancient communities across the world",
          ],
        },
        { svg: "link", svgText: "blablabla" },
        {
          previewTitle: "",
          pic: "link",
          whatYouGet: ["hello", "vegan", "sport", "collision"],
        },
        { takeLookTitle: "", takeLookText: "" },
        { galerySvg: "link" },
        {
          btnGetText: "Get vip access for free",
          declineButtonText: "no thanks",
        },
      ],
    };
  },
};
</script>
