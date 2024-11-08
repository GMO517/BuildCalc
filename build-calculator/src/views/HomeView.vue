<template>
  <header>
    <div class="row title-row align-items-center text-center">
      <div class="col-3">
        <img :src="require('@/assets/logo/logo.png')" />
      </div>
      <div class="col-9">
        <h2>統包大叔團隊 新成屋輕預算 線上報價試算</h2>
      </div>
    </div>
  </header>

  <div class="container-bg">
    <div class="container text-center">
      <div class="swiperClass">
        <swiper
          class="sampleSwiper"
          :module="modules"
          :pagination="{ clickable: true }"
        >
          <swiper-slide>
            <img :src="require('@/assets/slider/20200926133419jnum2.jpg')" />
          </swiper-slide>
          <swiper-slide>
            <img :src="require('@/assets/slider/20200926134016uz826.jpg')" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="row">
        <div class="col-1 border border-1">序號</div>
        <div class="col-3 border border-1">工程項目</div>
        <div class="col-1 border border-1">單位</div>
        <div class="col border border-1">數量</div>
        <div class="col-3 border border-1">單價</div>
        <div class="col border border-1">總金額</div>
        <div class="col border border-1">備註</div>
      </div>
      <div class="row">
        <div class="col border border-1">保護工程(依社區規定)(不列入初估)</div>
      </div>

      <div
        class="row"
        v-for="(item, index) in processedData"
        :key="index"
        :style="{
          backgroundColor: 'var(' + getColorStyle(item.index) + ')',
        }"
      >
        <div class="col-1 border border-1">
          {{ item.index }}
        </div>
        <div class="col-3 border border-1">{{ item.itemName }}</div>
        <div class="col-1 border border-1">{{ item.itemQuantityUnit }}</div>

        <div class="col border border-1">
          <select
            v-model="selectedCount[index]"
            @change="updateTotalPrice(index)"
            :disabled="isPriceInvalid(item.price)"
          >
            <option value="0">0</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <div class="col-3 border border-1">
          {{ itemCountProcess(item.price) }}
        </div>

        <div class="col border border-1">
          {{ itemPriceSumProcess(index, item.price) }}
        </div>
        <div class="col border border-1" v-if="noteInfoLength(item.noteInfo)">
          {{ item.noteInfo }}
        </div>
        <div class="col border border-1" v-else>
          <div class="button-tooltip-wrapper">
            <button
              @mouseenter="item.showTooltip = true"
              @mouseleave="item.showTooltip = false"
              class="tooltipBtn"
            >
              請點我
            </button>
            <span v-if="item.showTooltip" class="tooltipModel">
              {{ item.noteInfo }}
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-5 border border-1">總計:</div>
        <div class="col-7 border border-1">
          NT${{ totalPrice.toLocaleString() }}
        </div>
      </div>

      <div class="row">
        <div class="col-5 border border-1">
          預估雜項總計(依裝修經驗約為5~10%↑):
        </div>
        <div class="col-7 border border-1">
          NT$ {{ totalPriceWithExtra(minAddition).toLocaleString() }} ~ NT$
          {{ totalPriceWithExtra(maxAddition).toLocaleString() }}
        </div>
      </div>

      <div class="row note-content border border-2">
        <div class="col">
          說明:此線上估價試算系統使用期限約為3天，裝修金額隨著個人需求會有些許調整。<br />
          試算後有符合者，本公司收費3,000元(合作後可併入工程款)，以利安排場勘及施工前準備及進度表。<br />
          匯款帳號:星展銀行(810)中壢分行 6709209238 達圓室內裝修工程有限公司
        </div>
      </div>
    </div>
  </div>

  <div class="footer-div --bs-tertiary-color">
    Copyright © 達圓室內裝修工程有限公司 網頁設計 : GMO
  </div>
</template>

<script>
import "@/style/global.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Pagination],
      processedData: [],
      selectedCount: [],
      customCount: [],
      minAddition: 5,
      maxAddition: 10,
      noteLimit: 3,

      colorArr: [
        "--tableColor-red",
        "--tableColor-orange",
        "--tableColor-yellow",
      ],
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    currentColorIndex: 0,

    fetchGoogleSheet() {
      const apiKey = "AIzaSyCblqD68QVjdlMY5jN10euonBBGopL0J08";
      const sheetId = "1hUJ9GPEiwBh9yO8NIGfehOWKMDy4lkmy4H2QaNamr9g";
      const range = "工作表1";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.processedData = []; // 清空已存在的資料
          this.selectedCount = []; // 清空選擇的數量
          this.customCount = []; // 清空自定義的數量
          this.currentColorIndex = 0;
          this.sheetDataProcess(data.values);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    sheetDataProcess(data) {
      let isSkipFirstData = false;
      data.forEach((element) => {
        if (element[0] === "") return; // 跳過空的資料行
        if (!isSkipFirstData) {
          isSkipFirstData = true;
          return; //跳過第一個標頭資料
        }

        const obj = {
          index: element[0],
          itemName: element[1],
          itemQuantityUnit: element[2],
          count: 0,
          price: this.priceProcess(element[4]),
          noteInfo: element[6],
          showTooltip: false, //用於控制提示框顯示
        };
        this.processedData.push(obj);
        this.selectedCount.push(0);
        this.customCount.push(""); // 初始化自定義的數量
      });
    },

    updateSelect(index) {
      this.selectedCount[index] = this.customCount[index];
      this.updateTotalPrice(index); // 更新總價
    },

    updateTotalPrice(index) {
      const count = this.selectedCount[index] || this.customCount[index] || 0;
      this.processedData[index].count = Number(count);
      this.processedData[index].totalPrice =
        this.processedData[index].count * this.processedData[index].price;
    },

    priceProcess(element) {
      if (typeof element === "string" && element.includes("NT$")) {
        return Number(element.replace(/[^\d]/g, "")); // 去除非數字字符並轉為數字
      } else {
        return element; // 保持原值
      }
    },

    itemCountProcess(count) {
      if (typeof count === "number" && !isNaN(count))
        return `NT$ ${count.toLocaleString()}元`;
      else return count;
    },

    itemPriceSumProcess(dataIndex, itemPrice) {
      if (itemPrice === undefined || dataIndex === undefined) {
        return "";
      }
      if (
        typeof this.selectedCount[dataIndex] !== "number" ||
        typeof itemPrice !== "number"
      ) {
        return "";
      }
      return `NT$ ${(
        this.selectedCount[dataIndex] * itemPrice
      ).toLocaleString()}元`;
    },

    isPriceInvalid(price) {
      return (
        price === undefined ||
        price === "" ||
        (typeof price === "string" && !/\d/.test(price))
      );
    },

    totalPriceWithExtra(addition) {
      return this.totalPrice * (1 + addition / 100);
    },

    noteInfoLength(noteInfo) {
      if (noteInfo === "" || noteInfo === undefined) return true;
      if (noteInfo.length <= this.noteLimit) return true;
    },

    getColorStyle(typeIndex) {
      if (typeIndex === "1") {
        // 先增加，再檢查是否超出範圍
        this.currentColorIndex++;

        if (this.currentColorIndex >= this.colorArr.length) {
          this.currentColorIndex = 0; // 重置為 0，避免越界
        }
      }
      console.log(typeIndex);
      console.log(this.colorArr[this.currentColorIndex]);
      return this.colorArr[this.currentColorIndex];
    },
  },

  computed: {
    totalPrice() {
      return (
        this.processedData.reduce((sum, item, index) => {
          const count =
            this.selectedCount[index] || this.customCount[index] || 0;
          return sum + (count * item.price || 0);
        }, 0) || 0
      );
    },
  },

  mounted() {
    this.fetchGoogleSheet();
  },
};
</script>
