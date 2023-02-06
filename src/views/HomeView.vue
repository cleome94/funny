<template id="main-home">
  <v-app>
   <v-app-bar app color="#ffffff">
    <v-toolbar-title><img src="images/logo.png" width="80%"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
    <v-app-bar-nav-icon @click.stop="bDrawer = !bDrawer"></v-app-bar-nav-icon>
   </v-app-bar>
   <v-navigation-drawer fixed temporary v-model="bDrawer" right>
    <v-toolbar flat height="70px">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="images/cat.png">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"></v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list class="pt-3">
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-bullhorn-variant-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content>공지사항</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-alpha-e-circle-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content>이벤트</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-cog-outline</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content>설정</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-information-variant</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content>이용약관</v-list-item-content>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <section id="share">
        <a id="kakaotalk-sharing-btn" href="javascript:;" @click="kakaoShare">
          <img src="images/kakao-share.png"
              alt="카카오톡 공유 보내기 버튼" width="25%"/>
        </a>
      </section>
      </v-list-item>
    </v-list>
   </v-navigation-drawer>
   <v-main class="m-test">
   <div class="test-wrap">
    <div class="carousel-wrap">
        <carousel v-bind="options" @initialized="init" @changed="changed" :autoplay="true" :nav="false" :dots="false">
          <img src="@/assets/images/slide/slide01.png">
          <img src="@/assets/images/slide/slide02.png">
          <img src="@/assets/images/slide/slide03.png">
          <img src="@/assets/images/slide/slide04.png">
        </carousel>
    </div>
   </div>
   <v-container class="pop_cont">
    <h2>추천</h2>
    <div class="popular">
      <VueSlickCarousel v-bind="settings" :arrows="false" :dots="false">
          <router-link to="/test"><img src="@/assets/images/popular/popular01.png"></router-link>
          <img src="@/assets/images/popular/popular02.png">
          <img src="@/assets/images/popular/popular03.png">
          <img src="@/assets/images/popular/popular04.png">
      </VueSlickCarousel>
    </div>
    </v-container>
    <v-container>
    <h2>NEW</h2>
    <v-row class="new">
      <v-col cols="4" v-for="item in this.aNews" :key=item.key>
        <v-card>
          <v-img :src="item.url" height=auto></v-img>
        </v-card>
      </v-col>
    </v-row>
    </v-container>
    <v-container>
    <h2>전체</h2>
    <v-row>
      <v-col cols="12" v-for="item in this.aEntires" :key=item.key>
        <v-card>
          <v-img :src="item.url" height=auto></v-img>
          <v-card-title>
								<h1 class="title black--text text--darken-3 
									mb-3" style="font-family:Noto Sans KR; margin-bottom:0 !important">{{item.title}}</h1>
          </v-card-title>
          <v-card-text>
						<p class="body-2 black--text" style="font-family:Noto Sans KR !important">{{item.info}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </v-main>
  
  </v-app>
</template>

<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
<script>
import carousel from "vue-owl-carousel2";
import oPictureData from '@/datasources/picture-data';
import oNewData from '@/datasources/new-data';
import oEntireData from '@/datasources/entire-data';
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

  export default {

   name: 'swipeTest',
  components:{carousel, VueSlickCarousel},
  data(){
    return{
      bDrawer: false,
      'aPictures': oPictureData.aPictures,
      'aNews': oNewData.aNews,
      'aEntires': oEntireData.aEntires,
      plugin: null,
      options: {
        autoplay: false,
        items: 1,
        startPosition: 2,
        autoplayTimeout: 3000,
      },
      settings: {
                "arrows": false,
                "dots": false,
                "infinite": true,
                "initialSlide": 2,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "swipeToSlide": true
      }
    }
  },
  name: "share",
  methods: {
    kakaoShare : function(){
      Kakao.Share.createDefaultButton({
      container: '#kakaotalk-sharing-btn',
      objectType: 'feed',
      content: {
        title: 'Funny',
        description: '#심리 #심리테스트 #재미 #테스트 #심심',
        imageUrl:
          'https://postfiles.pstatic.net/MjAyMzAyMDZfMjU2/MDAxNjc1NjUxODQyNzU2.oSzPTVVT-ALAepeqRNJPB-GI8VdGqLbtwwvtMhvWELcg.8sxtDIJa4ngiDbGeipzxW5db_rosue2vh4t15OMJECQg.PNG.cleome1115/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80.png?type=w580',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  }
    
  }
  }
  
</script>