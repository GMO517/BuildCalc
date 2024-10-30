<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="fetchGoogleSheet">測試按鈕</button>
  </div>
  <div class="total">
    <p class="rows" v-for="(item, index) in processedData" :key="index">
      {{ item.index }} - {{ item.itemName }} - {{ item.itemQuantityUnit }} -
      {{ item.count }} - {{ item.price }}
    </p>
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
          count: element[3],
          price: element[4],
        };
        this.processedData.push(obj);
      });
    },
  },
  mounted() {
    this.fetchGoogleSheet();
  },
};
</script>

<style scoped>
/** .total {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  align-items: left; /*控制垂直對齊
  gap: 10px; /* 元素間的間距 */
/* } */

/* .row {
  border: 1px solid black;
  /* text-align: left; */
/*} */
</style>
