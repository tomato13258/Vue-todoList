<script>
export default {
    data() {
        return {
            arr: [1, 2, 3],
            arr2: [],
            abc:5,
        };


    },
    computed:{
        compute(){
            return this.abc*5;
        },

    },
    methods: {
        addBtn() {
            // 找出最後一筆資料
            //?? 如果undefine，做後面的事情，也可以使用||
            const lastItem = this.arr.at(-1) ?? 0;
            this.arr.push(lastItem + 1);
        },
        deleteBtn() {
            // 刪除最後一筆資料
            this.arr.pop();
        },
        addDataBtn() {
            const num = this.arr2.at(-1) ?? 0;
            this.arr2.push(num + 1);

        },
        deleteDataBtn() {
            this.arr2.shift();
            // 1.刪除指定資料 2.重整編號
            this.arr2.forEach((item2, index2) => {
                this.arr2[index2] = index2 + 1;
            });

        }
    },

};
</script>

<template>
    <!-- v-for KEY每個回圈都是獨立的，不可重複 -->
    <div class="flex gap-5 ">
        <div class="gap-1 w-6/12">
            <div v-for="(item, index) in arr" :key="index" class="text-gray-700">
                索引值為:{{ index }}，資料為:{{ item }}
            </div>
        </div>
        <div class="">
            <button class="border border-gray-700 p-5" @click=" addBtn()">新增</button>
            <button class="border border-gray-700 p-5" @click="deleteBtn()">刪除</button>
        </div>
    </div>
    <div class="mb-10">
        <div class="flex gap-5">
            <div class="">編號</div>
            <div class="">功能</div>

            <button class="border border-gray-500 px-2" @click="addDataBtn()">新增資料</button>
        </div>
        <div v-for="(item2, index2) in arr2" :key="index2" class="flex gap-9">
            <div class="">{{ item2 }}</div>
            <div class="border border-gray-500 px-2" @click="deleteDataBtn()">刪除</div>
        </div>
        <!-- <div class="flex gap-9">
            <div class="">{{index2}}</div>
            <div class="">刪除</div>
        </div> -->
    </div>
    <table class="border border-gray-600">
  <tr class="border border-gray-600">
    <th>國家</th>
    <th>首都</th>
    <th>人口</th>
    <th>語言</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>
    <!-- computed -->
    <!-- 生命週期 -->
</template>

<style scoped></style>