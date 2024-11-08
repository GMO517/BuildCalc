(function(){"use strict";var e={8424:function(e,o,t){var r=t(5130),n=t(6768);function s(e,o){const t=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.Wv)(t)}var i=t(1241);const c={},l=(0,i.A)(c,[["render",s]]);var d=l,a=t(1387),u=t(4232);const v={class:"row title-row align-items-center text-center"},p={class:"col-3"},h=["src"],b={class:"container-bg"},f={class:"container text-center"},m={class:"swiperClass"},g=["src"],k=["src"],C={class:"col-1 border border-1"},L={class:"col-3 border border-1"},y={class:"col-1 border border-1"},w={class:"col border border-1"},P=["onUpdate:modelValue","onChange","disabled"],x=["value"],I={class:"col-3 border border-1"},_={class:"col border border-1"},S={key:0,class:"col border border-1"},E={key:1,class:"col border border-1"},T={class:"button-tooltip-wrapper"},N=["onMouseenter","onMouseleave"],O={key:0,class:"tooltipModel"},D={class:"row"},j={class:"col-7 border border-1"},$={class:"row"},A={class:"col-7 border border-1"};function M(e,o,s,i,c,l){const d=(0,n.g2)("swiper-slide"),a=(0,n.g2)("swiper");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("header",null,[(0,n.Lk)("div",v,[(0,n.Lk)("div",p,[(0,n.Lk)("img",{src:t(4111)},null,8,h)]),o[0]||(o[0]=(0,n.Lk)("div",{class:"col-9"},[(0,n.Lk)("h2",null,"統包大叔團隊 新成屋輕預算 線上報價試算")],-1))])]),(0,n.Lk)("div",b,[(0,n.Lk)("div",f,[(0,n.Lk)("div",m,[(0,n.bF)(a,{class:"sampleSwiper",module:c.modules,pagination:{clickable:!0}},{default:(0,n.k6)((()=>[(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:t(7684)},null,8,g)])),_:1}),(0,n.bF)(d,null,{default:(0,n.k6)((()=>[(0,n.Lk)("img",{src:t(3693)},null,8,k)])),_:1})])),_:1},8,["module"])]),o[4]||(o[4]=(0,n.Fv)('<div class="row"><div class="col-1 border border-1">序號</div><div class="col-3 border border-1">工程項目</div><div class="col-1 border border-1">單位</div><div class="col border border-1">數量</div><div class="col-3 border border-1">單價</div><div class="col border border-1">總金額</div><div class="col border border-1">備註</div></div><div class="row"><div class="col border border-1">保護工程(依社區規定)(不列入初估)</div></div>',2)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(c.processedData,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"row",key:t,style:(0,u.Tr)({backgroundColor:"var("+l.getColorStyle(e.index)+")"})},[(0,n.Lk)("div",C,(0,u.v_)(e.index),1),(0,n.Lk)("div",L,(0,u.v_)(e.itemName),1),(0,n.Lk)("div",y,(0,u.v_)(e.itemQuantityUnit),1),(0,n.Lk)("div",w,[(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e=>c.selectedCount[t]=e,onChange:e=>l.updateTotalPrice(t),disabled:l.isPriceInvalid(e.price)},[o[1]||(o[1]=(0,n.Lk)("option",{value:"0"},"0",-1)),((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(50,(e=>(0,n.Lk)("option",{key:e,value:e},(0,u.v_)(e),9,x))),64))],40,P),[[r.u1,c.selectedCount[t]]])]),(0,n.Lk)("div",I,(0,u.v_)(l.itemCountProcess(e.price)),1),(0,n.Lk)("div",_,(0,u.v_)(l.itemPriceSumProcess(t,e.price)),1),l.noteInfoLength(e.noteInfo)?((0,n.uX)(),(0,n.CE)("div",S,(0,u.v_)(e.noteInfo),1)):((0,n.uX)(),(0,n.CE)("div",E,[(0,n.Lk)("div",T,[(0,n.Lk)("button",{onMouseenter:o=>e.showTooltip=!0,onMouseleave:o=>e.showTooltip=!1,class:"tooltipBtn"}," 請點我 ",40,N),e.showTooltip?((0,n.uX)(),(0,n.CE)("span",O,(0,u.v_)(e.noteInfo),1)):(0,n.Q3)("",!0)])]))],4)))),128)),(0,n.Lk)("div",D,[o[2]||(o[2]=(0,n.Lk)("div",{class:"col-5 border border-1"},"總計:",-1)),(0,n.Lk)("div",j," NT$"+(0,u.v_)(l.totalPrice.toLocaleString()),1)]),(0,n.Lk)("div",$,[o[3]||(o[3]=(0,n.Lk)("div",{class:"col-5 border border-1"}," 預估雜項總計(依裝修經驗約為5~10%↑): ",-1)),(0,n.Lk)("div",A," NT$ "+(0,u.v_)(l.totalPriceWithExtra(c.minAddition).toLocaleString())+" ~ NT$ "+(0,u.v_)(l.totalPriceWithExtra(c.maxAddition).toLocaleString()),1)]),o[5]||(o[5]=(0,n.Lk)("div",{class:"row note-content border border-2"},[(0,n.Lk)("div",{class:"col"},[(0,n.eW)(" 說明:此線上估價試算系統使用期限約為3天，裝修金額隨著個人需求會有些許調整。"),(0,n.Lk)("br"),(0,n.eW)(" 試算後有符合者，本公司收費3,000元(合作後可併入工程款)，以利安排場勘及施工前準備及進度表。"),(0,n.Lk)("br"),(0,n.eW)(" 匯款帳號:星展銀行(810)中壢分行 6709209238 達圓室內裝修工程有限公司 ")])],-1))])]),o[6]||(o[6]=(0,n.Lk)("div",{class:"footer-div --bs-tertiary-color"}," Copyright © 達圓室內裝修工程有限公司 網頁設計 : GMO ",-1))],64)}t(4114);var F=t(844),W=t(8174),X={data(){return{modules:[F.Pagination],processedData:[],selectedCount:[],customCount:[],minAddition:5,maxAddition:10,noteLimit:3,colorArr:["--tableColor-red","--tableColor-orange","--tableColor-yellow"]}},components:{Swiper:W.RC,SwiperSlide:W.qr},methods:{currentColorIndex:0,fetchGoogleSheet(){const e="AIzaSyCblqD68QVjdlMY5jN10euonBBGopL0J08",o="1hUJ9GPEiwBh9yO8NIGfehOWKMDy4lkmy4H2QaNamr9g",t="工作表1",r=`https://sheets.googleapis.com/v4/spreadsheets/${o}/values/${t}?key=${e}`;fetch(r).then((e=>e.json())).then((e=>{this.processedData=[],this.selectedCount=[],this.customCount=[],this.currentColorIndex=0,this.sheetDataProcess(e.values)})).catch((e=>{console.error("Error:",e)}))},sheetDataProcess(e){let o=!1;e.forEach((e=>{if(""===e[0])return;if(!o)return void(o=!0);const t={index:e[0],itemName:e[1],itemQuantityUnit:e[2],count:0,price:this.priceProcess(e[4]),noteInfo:e[6],showTooltip:!1};this.processedData.push(t),this.selectedCount.push(0),this.customCount.push("")}))},updateSelect(e){this.selectedCount[e]=this.customCount[e],this.updateTotalPrice(e)},updateTotalPrice(e){const o=this.selectedCount[e]||this.customCount[e]||0;this.processedData[e].count=Number(o),this.processedData[e].totalPrice=this.processedData[e].count*this.processedData[e].price},priceProcess(e){return"string"===typeof e&&e.includes("NT$")?Number(e.replace(/[^\d]/g,"")):e},itemCountProcess(e){return"number"!==typeof e||isNaN(e)?e:`NT$ ${e.toLocaleString()}元`},itemPriceSumProcess(e,o){return void 0===o||void 0===e||"number"!==typeof this.selectedCount[e]||"number"!==typeof o?"":`NT$ ${(this.selectedCount[e]*o).toLocaleString()}元`},isPriceInvalid(e){return void 0===e||""===e||"string"===typeof e&&!/\d/.test(e)},totalPriceWithExtra(e){return this.totalPrice*(1+e/100)},noteInfoLength(e){return""===e||void 0===e||(e.length<=this.noteLimit||void 0)},getColorStyle(e){return"1"===e&&(this.currentColorIndex++,this.currentColorIndex>=this.colorArr.length&&(this.currentColorIndex=0)),this.colorArr[this.currentColorIndex]}},computed:{totalPrice(){return this.processedData.reduce(((e,o,t)=>{const r=this.selectedCount[t]||this.customCount[t]||0;return e+(r*o.price||0)}),0)||0}},mounted(){this.fetchGoogleSheet()}};const B=(0,i.A)(X,[["render",M]]);var G=B;const Q=[{path:"/",name:"home",component:G}],U=(0,a.aE)({history:(0,a.Bt)(),routes:Q});var K=U,V=t(782),q=(0,V.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.Ef)(d).use(q).use(K).mount("#app")},4111:function(e,o,t){e.exports=t.p+"img/logo.1ed2fc5c.png"},7684:function(e,o,t){e.exports=t.p+"img/20200926133419jnum2.1f6da5d4.jpg"},3693:function(e,o,t){e.exports=t.p+"img/20200926134016uz826.e681d5cf.jpg"}},o={};function t(r){var n=o[r];if(void 0!==n)return n.exports;var s=o[r]={exports:{}};return e[r].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(o,r,n,s){if(!r){var i=1/0;for(a=0;a<e.length;a++){r=e[a][0],n=e[a][1],s=e[a][2];for(var c=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(c=!1,s<i&&(i=s));if(c){e.splice(a--,1);var d=n();void 0!==d&&(o=d)}}return o}s=s||0;for(var a=e.length;a>0&&e[a-1][2]>s;a--)e[a]=e[a-1];e[a]=[r,n,s]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.p="/BuildCalc/"}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,s,i=r[0],c=r[1],l=r[2],d=0;if(i.some((function(o){return 0!==e[o]}))){for(n in c)t.o(c,n)&&(t.m[n]=c[n]);if(l)var a=l(t)}for(o&&o(r);d<i.length;d++)s=i[d],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(a)},r=self["webpackChunkbuild_calculator"]=self["webpackChunkbuild_calculator"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(8424)}));r=t.O(r)})();
//# sourceMappingURL=app.cc4726c5.js.map