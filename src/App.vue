<template>
  <router-view></router-view>
</template>

<script>
export default {
  
};
</script>
<style scoped>
@import "./assets/sass/variables.scss";

#app, .v-application{
  font-family: "Noto Sans KR" !important;
  font-weight:normal !important;
}
.carousel-wrap {
    width: 100%;
    margin: 0 auto;
  }
</style>
<style lang="scss">
.slick {
    &-slider {
        & + .slick-slider {
            margin-top: 50px;
            .slick-slide > div {
                background: beige;
            }
        }
    }
    &-slide {
        > div {
            background: silver;
            margin: 5px;
        }
        p {
            text-align: center;
            font: {
                size: 50px;
                weight: bold;
            }
        }
    }
}
.v-toolbar-title{
  margin-top:10px
}
.v-toolbar__title img{
  margin-top:10px
}
.title{
  padding-top:0 !important;
  padding-bottom:0 !important;
}
.container{
  margin-top:10px
}
img[data-v-7ba5bd90]{
  margin-bottom:-10px;
}
.login img{
  cursor:pointer;
}
#share img{
  border-radius:70%;
  overflow:hidden;
}
.slick-slide > div{
  border-radius:20px;
  margin-bottom:-7px;
}
.m-test h2{
  font-size:1.25em;
  margin-bottom:3px;
}
.popular img{
  border-radius:10px;
  width:100%;
}
.v-card img{
  border-radius:10px;
}
.v-card__title{
  padding-bottom:0 !important;
}
.v-application .title{
  font-weight:bold !important;
}
.v-application a{
  color:#000 !important
}
.v-application p, .v-application .mb-3{
  margin-bottom:0 !important;
}
</style>