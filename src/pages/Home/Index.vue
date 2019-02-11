<template>
  <div class="wrap">
    <Header/>
    <div>
      <Nav/>
      <div class='slider'>
        <swiper :options="swiperOption">
            <swiper-slide><img src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg"></swiper-slide>
            <swiper-slide><img src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg"></swiper-slide>
            <swiper-slide><img src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg"></swiper-slide>
          <div class="swiper-scrollbar"></div> //滚动条
        </swiper>
      </div>
      <div  class="content-box">
        <div class='g-flex g-jc-sb'> 
          <div class='samll-width'>
            <div class="area-title">
              <div class="side-title">通知公告</div>
              <div class="more">更多</div>
            </div>
            <div class="g-pd-t-10">
              <div class="g-flex">
                <div class="item-num">
                  <div class="item-num-mun">20</div>
                  <div class="item-num-mounth g-color-gray g-fs-14">八月</div>
                </div>
                <div class="item-content g-two-line">
                  这是通知公告的内容
                </div>
              </div>
            </div>
          </div>
          <div style="width: 646px">
             <div class="area-title">
              <div class="side-title">校友会志</div>
              <div class="more">更多</div>
            </div>
            <div class="g-pd-t-10">
              <div class="g-flex">
                <img class='g-img-large' src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" alt="">
                <div>
                  <div class='g-color-dark g-pd-t-10 g-pd-b-10 g-pd-l-20'>情系档案捐珍藏 桑梓微霞尚满天</div>
                  <div class='g-fs-14 g-color-gray-0 g-pd-l-20 g-pd-b-10'>2018年12月9日  |  本报讯</div>
                  <div class="g-fs-14 g-color-gray-0 g-pd-l-20 g-pd-t-15">
                    简介：赣州市政协原主席赖联明同志获悉赣州市正在筹备“不忘初心，奋发图强—新中国工业档
                    案文献展”暨“赣州工业成就展”，12月7日上午，冒雨来到赣州市档案馆，将个人编著和珍藏
                  </div>
                </div>
              </div>
              <div class="g-flex g-jc-sb">
                 <div class="g-flex g-pd-t-10" style="width: 302px;">
                <div class='g-sanjiao-content'>
                  <div class="g-sanjiao">
                  </div>
                </div>
                <div class="item-content g-one-line">
                  这是通知公告的内容
                </div>
              </div>
               <div class="g-flex g-pd-t-10" style="width: 302px;">
                <div class='g-sanjiao-content'>
                  <div class="g-sanjiao">
                  </div>
                </div>
                <div class="item-content g-one-line g-pd-r-10">
                  这是通知公告的内容
                </div>
              </div>

              </div>
              <div class="g-flex g-pd-t-10" style="width: 302px;">
                <div class='g-sanjiao-content'>
                  <div class="g-sanjiao">
                  </div>
                </div>
                <div class="item-content g-one-line">
                  这是通知公告的内容
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="g-flex g-jc-sa">
          <div class='samll-width'>
            <div class="area-title">
              <div class="side-title">校友活动</div>
              <div class="more">更多</div>
            </div>
            <div class="g-pd-t-10">
              <div class="g-flex">
                <img src="http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg" alt="" class='g-img-small'>
                <div class="item-content g-one-line">
                  这是通知公告的内容
                </div>
              </div>
            </div>
          </div>
          <div class='samll-width'>
            <div class="area-title">
              <div class="side-title">通知公告</div>
              <div class="more">更多</div>
            </div>
            <div class="g-pd-t-10">
              <div class="g-flex">
                <div class="item-num">
                  <div class="item-num-mun">20</div>
                  <div class="item-num-mounth g-color-gray g-fs-14">八月</div>
                </div>
                <div class="item-content g-two-line">
                  这是通知公告的内容
                </div>
              </div>
            </div>
          </div>
          <div class='samll-width'>
            <div class="area-title">
              <div class="side-title">通知公告</div>
              <div class="more">更多</div>
            </div>
            <div class="g-pd-t-10">
              <div class="g-flex">
                <div class="item-num">
                  <div class="item-num-mun">20</div>
                  <div class="item-num-mounth g-color-gray g-fs-14">八月</div>
                </div>
                <div class="item-content g-two-line">
                  这是通知公告的内容
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '../../component/common/Header/index';
import Footer from '../../component/common/Footer/index';
import Nav from '../../component/common/Nav/index';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // 切换模式  横屏或者竖屏
        // direction : 'vertical',
        // 设置自动播放速度
        autoplay: {
          disableOnInteraction: false,
          delay: 4000,
        },
        // 开启无限循环
        loop: true,
        // 设置点击箭头
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // 设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 1,
        // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: true,
        // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
        // freeMode:true
      },
    };
  },
  components: {
    Header,
    Footer,
    Nav,
    swiper,
    swiperSlide,
  },
  methods: {},
};
</script>

<style lang="less">
@import "~mido-less-general/lib/mixins/mixins.less";
@import "../../css/global.css";
  .wrap {
    width: 1010px;
    margin: 0 auto;
    .slider {
      height: 400px; 
      .swiper-container {
        height: 100%;
      }
    }
    .content-box {
      padding: 0 20px;
    }
    .samll-width {
      width: 303px;
    }
    .area-title {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      padding-bottom: 10px;
      border-bottom: solid 1px #E2E7F0;
    }
    .side-title {
      font-family: PingFangSC-Medium;
      font-size: 18px;
      color: #00923F;
      line-height: 18px;
    }
    .more {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #9B9B9B;
      text-align: right;
      line-height: 18px;
    }
    .item-num {
    
    }
    .item-num-mun {
      background: #2BCD71;
      border-radius: 22px;
      width: 37px;
      height: 27px;
      text-align: center;
      color: white;
      font-family: AppleSystemUIFont;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0.26px;
    }
    .item-num-mounth {

    }
    .item-content {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #000000;
      letter-spacing: 0.26px;
      text-align: justify;
      line-height: 24px;
      padding-left: 10px;
    }
  }
</style>
