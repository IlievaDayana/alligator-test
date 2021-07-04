<template>
  <div class="centered_content">
    <Hello/>
    <div class="reviews">
      <div class="reviews__review">
        <div class="reviews__review_comment">
          <span class="reviews__review_name">Pepe</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          fugit fuga eius aut quasi quisquam iste, tenetur ex inventore ducimus
          cum sunt
        </div>
        <div class="reviews__review_img"></div>
        
      </div>
      <div class="reviews__review">
        <div class="reviews__review_comment reviews__review_comment--left">
          <span class="reviews__review_name review_name--left">Peter</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          fugit fuga eius aut quasi quisquam iste, tenetur ex inventore ducimus
          cum sunt
        </div>
        <div class="reviews__review_img"></div>
        
      </div>
      
    </div>
    <button @click="throew">throw error</button>
  </div>
</template>
<script>
export default {
  methods: {
    throew(){
      throw new Error('error')
    }
  }
}
</script>
<style lang='scss'>
* {
  box-sizing: border-box;
}
.centered_content {
  margin-top:50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reviews {
  width: 400px;
  max-width: 800px;
  height: auto;
  background-color: gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &__review{
    margin: 0 auto;
    width: 400px;
    height: 150px;
    position: relative;
    &_comment {
      width: 270px;
      height: auto;
      margin: 20px 0;
      background-color: whitesmoke;
      position: absolute;
      left:50px;
      display: flex;
      justify-content: flex-end;
      border-radius:5px;
      padding: 5px;
      &:after {
        border-bottom: 10px solid rgb(255, 255, 255);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        width: 0;
        height: 0;
        content: "";
        display: block;
        position: absolute;
        bottom: 100%;
        right: 2em;
      }
      span{
        position: absolute;
        top:-40px;
      }
    }
    &_img {
      width:20px;
      height:20px;
      border-radius:50%;
      background-color: whitesmoke;
      position: absolute;
      right: 22px;
      top:-20px;
      z-index: 3;
    }

    &:after{
      content:'';
      position: absolute;
      width: 2px;
      height: 110%;
      background-color: black;
      right: 30px;
      top:-30px;
    }
  }
 
}

 @media screen and (min-width: 600px) {
   .reviews {
     width:800px;
      &__review{
        &:after{
        right: 194px;
       }
      &_comment{
        right: 210px;
        left: auto;
        top: 10px;

        &--left {
          right:-90px;
       }
      }

      &_name{
        position: absolute;
        display: block;
        top: -50px;
        right: 200px;
        &--left{
          justify-content: flex-end;
          align-items: flex-end;
          left: -300px;
        }
      }
      &_img {
        right: 185px;
      }
      }
      
    }
  }
</style>