<template>
  <div>
    <h1>統包大叔團隊 新成屋輕預算 線上報價試算</h1>
  </div>

  <div class="container text-center">
    <div class="row" v-for="(item, index) in processedData" :key="index">
      <div class="col-1 border border-1">{{ item.index }}</div>
      <div class="col-3 border border-1">{{ item.itemName }}</div>
      <div class="col-1 border border-1">{{ item.itemQuantityUnit }}</div>

      <!-- 下拉式選單和自定義數字輸入 -->
      <div class="col border border-1">
        <template v-if="index != 0">
          <select
            v-model="selectedCount[index]"
            @change="updateTotalPrice(index)"
            :disabled="isPriceInvalid(item.price)"
          >
            <option value="0">0</option>
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </template>
        <template v-else> 數量 </template>
      </div>

      <div class="col-3 border border-1">
        {{ itemCountProcess(item.price) }}
      </div>

      <div class="col border border-1">
        {{ itemPriceSumProcess(index, item.price) }}
      </div>
    </div>
    <p>總計:</p>
    <div class="col border border-1">NT${{ totalPrice.toLocaleString() }}</div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      processedData: [],
      selectedCount: [], // 用來存儲選擇的數量
      customCount: [], // 用來存儲自定義的數量
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
          this.selectedCount = []; // 清空選擇的數量
          this.customCount = []; // 清空自定義的數量
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
        };
        this.processedData.push(obj);
        this.selectedCount.push(0);
        this.customCount.push(""); // 初始化自定義的數量
      });
    },

    updateSelect(index) {
      // 當使用者輸入自定義數字時，同步更新選擇的數字
      this.selectedCount[index] = this.customCount[index];
      this.updateTotalPrice(index); // 更新總價
    },

    updateTotalPrice(index) {
      // 如果使用者選擇了數量，更新總價
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

    //商品數量資料處理
    itemCountProcess(count) {
      if (typeof count === "number" && !isNaN(count)) {
        return `NT$${count.toLocaleString()}元`;
      } else {
        return count;
      }
    },

    // 項目總價處理
    itemPriceSumProcess(dataIndex, itemPrice) {
      if (itemPrice === undefined || dataIndex === undefined) {
        return "";
      } else {
        return isNaN(this.selectedCount[dataIndex] * itemPrice)
          ? "項目總價"
          : `NT$${(
              this.selectedCount[dataIndex] * itemPrice
            ).toLocaleString()}元`;
      }
    },

    isPriceInvalid(price) {
      // 判斷價格是否為 undefined、空字串或不包含任何數字
      return (
        price === undefined ||
        price === "" ||
        (typeof price === "string" && !/\d/.test(price))
      );
    },
  },

  computed: {
    // 計算所有項目的總價
    totalPrice() {
      return this.processedData.reduce((sum, item, index) => {
        const count = this.selectedCount[index] || this.customCount[index] || 0;
        return sum + (count * item.price || 0);
      }, 0);
    },
  },
  mounted() {
    this.fetchGoogleSheet();
  },
};
</script>

<style scoped>
/* 可以根據需要自定義樣式 */
</style>
