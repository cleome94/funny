<template id="test01">
    <v-app style="font-family:Noto Sans KR !important">
        <v-app-bar app color="#ffffff">
            <v-btn icon>
                <router-link to="/"><v-icon>mdi-arrow-left</v-icon></router-link>
            </v-btn>
            <v-toolbar-title><router-link to="/"><img src="images/logo.png" width="80%"></router-link></v-toolbar-title>
        </v-app-bar>
    <v-main>
    <div id="test">
        <div id="intro" class="intro-wrap">
            <div class="intro">
                <img src="@/assets/images/popular/popular01.png">
                <div class="intro-story" @click="start">테스트 시작하기!</div>
            </div>
        </div>
        <div id="main">
            <div class="title-wrap">
                <h2 class="main-title">
                    선호하는 이성 테스트
                </h2>
            </div>
            <div class="question-wrap">
                <img src="@/assets/images/test/test.png" width="60%">
                <h3 class="question">
                    눈 앞에 여러가지 물건이 있다.<br>
                    제일 먼저 잡고 싶은 물건은?
                </h3>
            </div>

            <div class="answer-wrap">
                <div class="answer">
                    <p v-for="(item, index) in answers" @click="next(index)" :key="item.answersName">{{ item.answersName }}</p>
                </div>
            </div>
        </div>
        <div id="result" class="result-wrap">
            <div class="result">
                <p class="result-img"><img :src="img_url" width="40%"/></p>
                <p class="result-cont">{{ pnt_result.resultContent }} <br>선호하는 타입</p>
                <p @click="queset_return" class="t-return">다시 고르기</p>
                <h2>추천 콘텐츠</h2>
                <div class="pc-wrap">
                    <v-row class="popular-cont">
                        <v-col cols="4" v-for="item in this.aPictures" :key=item.key>
                            <v-card>
                                <v-img :src="item.url" height=auto></v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <router-link to="/"><p class="t-home">다른 테스트 하러 가기</p></router-link>
            </div>
        </div>
    </div>
    </v-main>
    </v-app>
</template>
<script>
import oTestData from '@/datasources/test-data';
import oPictureData from '@/datasources/picture-data';
export default{
    
    data(){
        // console.log(oTestData.atestes[0].url)
        return{
            question:'눈 앞에 여러가지 물건이 있다. 제일 먼저 잡고 싶은 물건은?',
            answers:[
                {answersName:'과일'},
                {answersName:'떡'},
                {answersName:'수정구슬'},
                {answersName:'현찰'},
                {answersName:'반지'}
            ],
            ans_result:[
                {resultName:'과일', resultContent:'생각이 많고 진지해 보이는 연상을'},
                {resultName:'떡', resultContent:'무드에 약해 화술과 매너가 좋은 사람을'},
                {resultName:'수정구슬', resultContent:'정열적이고 열중하는 사람을'},
                {resultName:'현찰', resultContent:'부드럽고 따뜻한 사람을'},
                {resultName:'반지', resultContent:'자기를 보호해 줄 수 있는 연하의 이성을'}
            ],
            pnt_result:'',
            img_url:'',
            'aPictures' : oPictureData.aPictures
        }
    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
    },
   methods: {
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();
        },
        next: function(id) {
            $('#intro').hide();
            $('#main').hide();
            $('#result').show();
            
            this.pnt_result = this.ans_result[id];
            this.img_url = oTestData.atestes[id].url;
        },
        queset_return : function (){
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

        }
    }
};
</script>
<style>
@import "../assets/css/test.css";
</style>