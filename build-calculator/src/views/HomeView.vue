<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="fetchGoogleSheet">測試按鈕</button>
  </div>
  <div class="total">
    <!-- <p class="rows" v-for="(item, index) in processedData" :key="index">
      {{ item.index }} - {{ item.itemName }} - {{ item.itemQuantityUnit }} -
      {{ item.count }} - {{ item.price }}
    </p> -->
  </div>

  <!-- <div class="container text-center">
    <div class="row">
      <div class="col">{{ item.itemName }}</div>
      <div class="col">{{ item.itemQuantityUnit }}</div>
      <div class="col">{{ item.index }}</div>
      <div class="col">{{ item.count }}</div>
      <div class="col">{{ item.price }}</div>
    </div>
  </div> -->

  <!-- <div class="container text-center">
    <div class="row">
      <div class="col" style="background-color: red">1</div>
      <div class="col-7" style="background-color: blue">5.5m2電源迴路增設</div>
      <div class="col" style="background-color: yellow">迴</div>
      <div class="col" style="background-color: orange">1</div>
      <div class="col-2" style="background-color: purple">NT$3,500</div>
    </div>
  </div> -->

  <div class="container text-center">
    <div class="row" v-for="(item, index) in processedData" :key="index">
      <div class="col border border-1">{{ item.index }}</div>
      <div class="col-3 border border-1">{{ item.itemName }}</div>
      <div class="col border border-1">{{ item.itemQuantityUnit }}</div>

      <!-- 若欄位為數量，顯示下拉式選單；否則顯示文本 -->
      <div class="col border border-1">
        <template v-if="typeof item.count === 'number'">
          <select v-model="item.count" @change="updateTotalPrice(index)">
            <option v-for="n in 10" :key="n" :value="n - 1">{{ n }}</option>
          </select>
        </template>
        <template v-else>
          {{ item.count }}
        </template>
      </div>

      <div class="col border border-1">
        {{
          typeof item.price === "number" && !isNaN(item.price)
            ? `NT$${item.price.toLocaleString()}元`
            : item.price
        }}
      </div>

      <div class="col border border-1">
        {{ isNaN(item.count * item.price) ? "" : item.count * item.price }}
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {
    return {
      processedData: [],
    };
  },
  methods: {
    fetchGoogleSheet() {
      const apiKey = "AIzaSyCblqD68QVjdlMY5jN10euonBBGopL0J08";
      const sheetId = "1hUJ9GPEiwBh9yO8NIGfehOWKMDy4lkmy4H2QaNamr9g";
      const range = "工作表1";
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.processedData = []; // 清空已存在的資料
          this.sheetDataProcess(data.values); // 使用 data.values 而非 data.value
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    sheetDataProcess(data) {
      data.forEach((element) => {
        if (element[0] === "") return; // 跳過空的資料行

        const obj = {
          index: element[0],
          itemName: element[1],
          itemQuantityUnit: element[2],
          // count: isNaN(element[3]) ? element[3] : Number(element[3]),
          count: 0,
          price:
            typeof element[4] === "string" && element[4].includes("NT$")
              ? Number(element[4].replace(/[^\d]/g, "")) // 去除非數字字符並轉為數字
              : element[4], // 保持原值
        };
        this.processedData.push(obj);
      });
    },
    // 增加 count
    incrementCount(index) {
      this.processedData[index].count++;
    },
    // 減少 count，確保 count 不會低於 0
    decrementCount(index) {
      if (this.processedData[index].count > 0) {
        this.processedData[index].count--;
      }
    },
    updateTotalPrice(index) {
      this.processedData[index].totalPrice =
        this.processedData[index].count * this.processedData[index].price;
    },
  },
  mounted() {
    this.fetchGoogleSheet();
  },
};
</script>

<style scoped>
/* .container text-center {
  margin-left: 5%;
  margin-right: 5%;
} */
/* .row {
  border: 2px solid black;
} */
</style>
