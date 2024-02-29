<script>
export default{
    data(){
        return{
            undoText:'',
            list:[],
            // checked:false,
            changeTab:'',
        };

    },
    methods:{
        addUndotext(){
            if(this.undoText!==''){
                // : 是指把undoText的內容，更新到this.undoText的位置
                this.list.push({ undoText: this.undoText, checked: false });
                this.undoText='';
                console.log(this.list);
            }
        },
        deleteText(){
            this.list.shift();
        },
        selectTab(tab){
            this.changeTab = tab;
            // 切換篩選頁籤
        },

    },
    computed:{
        filterList(){
            if(this.changeTab===''){
                return this.list;

            }
            else if(this.changeTab==='done'){
                return this.list.filter(item=>item.checked);
            }
            // item.checked的狀態=true時
            else if(this.changeTab==='undone'){
                return this.list.filter(item=>!item.checked);
            }
            // item.checked的狀態=false時
            return this.list;
            // !!!!!!!!!!!!!!!!如果 changeTab 不是任何以上的值，返回整個列表
            // (條件式後一定要加不然vscode會生氣)
        },
    },

};
// 1.v-model同步哪些item資料是被勾選的 
// 2.建立回傳值的空間(changeTab)
// 2.將按鈕綁定(v-on)+同時回傳一個特定值(changeTab)給function篩選 
// 3.建立篩選function:filterList()
// 4.將原本的v-for的inlist 改成 in filterList(篩選function)

// !!!寫程式時遇到較混淆的狀況:
// this.list.filter(item=>!item.checked);    =>是指回調函式，在item中篩選!item.checked
// list:[](一個空袋)與for迴圈中item(禮物)的區別

</script>
<template>
    <div class="background  bg-cyan-100 w-full h-screen justify-center flex items-center backdrop-grayscale-[.5] bg-no-repeat bg-cover grayscale-[50%] " style="background-image: url(https://i.pinimg.com/originals/7b/fb/98/7bfb98ac655ba6b6e912211808c516f2.jpg)">
      <div class="box-all w-9/12 h-5/6 flex bg-gray-200/90  p-[50px] rounded-[5px] flex-col">
          <div class="box box-top mb-[30px] flex justify-between text-[18px]">
              <input type="text" class="add-text w-9/12 text-[18px] rounded-[10px]"  placeholder="請輸入待辦事項..." v-model="undoText">
              <button class="addBtn border border-gray-900 px-[10px] py-[5px] rounded-[5px] " @click="addUndotext()">新增</button>
          </div>
          <div class="box box-mid mb-[35px]">
              <button class="all-btn border text-[#888888] border-b-gray-900 px-[10px] py-[5px] rounded-[5px] text-[18px]  bg-[#e3c561] " :class="{active:changeTab===''}" @click="selectTab('')">全部</button>
              <button class="finish-btn border text-[#888888] border-b-gray-900 px-[10px] py-[5px] rounded-[5px] text-[18px] bg-[#e3c561] " :class="{active:changeTab==='done'}" @click="selectTab('done')">已執行</button>
              <button class="unfinish-btn border text-[#888888] border-b-gray-900 px-[10px] py-[5px] rounded-[5px] text-[18px] bg-[#e3c561] " :class="{active:changeTab==='undone'}"  @click="selectTab('undone')">未執行</button>
          </div>
          <div class="box box-bottom">
              <div class="box-bottom-nav flex justify-between pl-[165px] pr-[165px]">
                  <span class="text-[18px]">執行</span>
                  <span class="text-[18px]">事項</span>
                  <span class=" text-[18px]">功能</span>
              </div>
              <div class="line border  border-gray-900 mb-[5px]" ></div>
              <!--表單 -->
              <div class="todoitem-all pl-[175px] pr-[120px]">
                  <div class="box-bottom-todoitem flex justify-between  mb-[5px]">
                   
                      <input type="checkbox" class="">
                      <span class="todo-title ml-[50px]">初始的訊息</span>
                      <div class="box-bottom-buttons">
                          <button class="border  border-gray-900 px-[10px] text-[18px] py-[3px]">修改</button>
                          <button class="border  border-gray-900 px-[10px] text-[18px] py-[3px]" >刪除</button>
                      </div>
                  </div>
              </div>
              <!-- 用v-for把我要印的東西包好 -->
              <div class="todoitem-all2 pl-[175px] pr-[120px]">
                  <div class="box-bottom-todoitem flex justify-between  mb-[5px]" v-for="(text,index) in filterList" :key="index">
                    <!-- 當checkbox為true，就會打勾 -->
                     <!-- v-model即時反應是否被勾選 -->
                      <input type="checkbox" class="" v-model="text.checked">
                      <span class="todo-title ml-[50px]">{{text.undoText}}</span>
                      <div class="box-bottom-buttons">
                          <button class="border  border-gray-900 px-[10px] text-[18px] py-[3px]">修改</button>
                          <button class="border  border-gray-900 px-[10px] text-[18px] py-[3px]" @click="deleteText()">刪除</button>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>


<style scoped>
 html, body {
    height: 100%;
    width: 100%;
  }
  .active{
    background-color: #ffc507;
    color: #272625;
    border-bottom: none;
  }
</style>