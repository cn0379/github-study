<template>
  <div class="seat-block">
    <div class="seat-side">
      <div class="side-item" v-for="val in 9" :key="val">{{val}}</div>
    </div>
    <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
    <div class="inner-seat-wrapper" ref="innerSeatWrapper">
      <div v-for="(row,index) in seatRow" :key="index" class="row">
        <div v-for="(col,index) in seatCol" :key="index" class="seat">
          <div
            class="inner-seat"
            @click="handleChooseSeat(row-1,col-1)"
            v-if="seatArray[row-1][col-1]!==-1"
            :class="seatArray[row-1][col-1]===2?'bought-seat':(seatArray[row-1][col-1]===1?'selected-seat':'unselected-seat')"
          ></div>
        </div>
      </div>
    </div>
    <CinemaFoot>
      <template v-slot:tips>
        <p>推荐座位</p>
        <span @click="smartChoose(1)" :class="activeIndex==1?'active':''">1人</span>
        <span @click="smartChoose(2)" :class="activeIndex==2?'active':''">2人</span>
        <span @click="smartChoose(3)" :class="activeIndex==3?'active':''">3人</span>
        <span @click="smartChoose(4)" :class="activeIndex==4?'active':''">4人</span>
      </template>
      <template v-slot:default>
        <div v-if="sureable" @click="sureSeat()" class="sure">确 认</div>
        <div v-else>请先选座</div>
      </template>
    </CinemaFoot>
  </div>
</template>
<script>
import CinemaFoot from "../../components/CinemaFoot";

export default {
  props: {
    roomInfo: {
      type: Object,
    },
  },
  components: {
    CinemaFoot,
  },
  data() {
    return {
      // 影院的二维数组,-1非座位,0可选(灰),1已选(蓝),2已购不可选(黄)
      seatArray: [],
      // 影院座位行数
      seatRow: 9,
      // 影院座位列数
      seatCol: 12,
      //座位尺寸
      // seatSize: "20",
      //推荐选座最大数量
      smartChooseMaxNum: 4,
      activeIndex: 0,
    };
  },
  methods: {
    //初始座位数组
    initSeatArray() {
      let seatArray = Array(this.seatRow)
        .fill(0)
        .map(() => Array(this.seatCol).fill(0));
      this.seatArray = seatArray;
      //初始化不是座位的地方
      this.initNonSeatPlace();
      //   初始化已购座位
      this.initBoughtSeat();
    },
    //初始化不是座位的地方
    initNonSeatPlace() {
      for (let i = 0; i < 2; i++) {
        this.seatArray[i][0] = -1;
        this.seatArray[i][this.seatArray[0].length - 1] = -1;
        if (i === 0) {
          this.seatArray[i][1] = -1;
          this.seatArray[i][this.seatArray[0].length - 2] = -1;
        }
      }
    },
    // 初始化已购座位
    initBoughtSeat() {
      for (let i = 0; i < this.boughtSeat.length; i++) {
        this.handleChooseSeat(...this.boughtSeat[i]);
      }
    },
    //处理座位选择逻辑
    handleChooseSeat(row, col) {
      let seatValue = this.seatArray[row][col];
      console.log(seatValue);
      let newArray = this.seatArray;
      //如果是已购座位，直接返回
      if (seatValue === 2) return;
      //如果是已选座位点击后变未选
      if (seatValue === 1) {
        newArray[row][col] = 0;
      } else if (seatValue === 0) {
        newArray[row][col] = 1;
        console.log(newArray);
     }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatArray = newArray.slice();
    },
    //向前后某个方向进行搜索的函数,参数是起始行，终止行,推荐座位个数
    searchSeatByDirection(fromRow, toRow, num) {
      /*
       * 推荐座位规则
       * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
       *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果座位最终结果，优先向后排进行搜索，
       *    后排都没有才往前排搜，前排逻辑同上
       *
       * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
       *
       * */

      /*
       * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
       * {
       *   result:Array([x,y])
       *   offset:Number
       * }
       *
       */
      let currentDirectionSearchResult = [];

      let largeRow = fromRow > toRow ? fromRow : toRow,
        smallRow = fromRow > toRow ? toRow : fromRow;

      for (let i = smallRow; i <= largeRow; i++) {
        //每一排的搜索,找出该排里中轴线最近的一组座位
        let tempRowResult = [],
          minDistanceToMidLine = Infinity;
        for (let j = 0; j <= this.seatCol - num; j++) {
          //如果有合法位置
          if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
            //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
            let resultMidPos = parseInt(j + num / 2, 10);
            let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
            //如果距离较短则更新
            if (distance < minDistanceToMidLine) {
              minDistanceToMidLine = distance;
              //该行的最终结果
              tempRowResult = this.generateRowResult(i, j, j + num - 1);
            }
          }
        }
        //保存该行的最终结果
        currentDirectionSearchResult.push({
          result: tempRowResult,
          offset: minDistanceToMidLine,
        });
      }

      //处理后排的搜索结果:找到距离中轴线最短的一个
      //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
      let isBackDir = fromRow < toRow;
      let finalReuslt = [],
        minDistanceToMid = Infinity;
      if (isBackDir) {
        //后排情况,从前往后
        currentDirectionSearchResult.forEach((item) => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      } else {
        //前排情况，从后往前找
        currentDirectionSearchResult.reverse().forEach((item) => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      }

      //直接返回结果
      return finalReuslt;
    },

    //推荐选座,参数是推荐座位数目
    smartChoose(num) {
      this.activeIndex = num;
      //找到影院座位水平垂直中间位置的后一排
      let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1;
      //先从中间排往后排搜索
      let backResult = this.searchSeatByDirection(
        rowStart,
        this.seatRow - 1,
        num
      );
      if (backResult.length > 0) {
        this.chooseSeat(backResult);
        return;
      }
      //再从中间排往前排搜索
      let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
      if (forwardResult.length > 0) {
        this.chooseSeat(forwardResult);
        return;
      }
      //提示用户无合法位置可选
      alert("无合法位置可选!");
    },

    /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
     *
     */
    checkRowSeatContinusAndEmpty(rowNum, startPos, endPos) {
      let isValid = true;
      for (let i = startPos; i <= endPos; i++) {
        if (this.seatArray[rowNum][i] !== 0) {
          isValid = false;
          break;
        }
      }
      return isValid;
    },
    //辅助函数：返回每一行的某个合理位置的座位数组
    generateRowResult(row, startPos, endPos) {
      let result = [];
      for (let i = startPos; i <= endPos; i++) {
        result.push([row, i]);
      }
      return result;
    },
    //辅助函数:智能推荐的选座操作
    chooseSeat(result) {
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < result.length; i++) {
        //选定座位
        oldArray[result[i][0]][result[i][1]] = 1;
      }
      this.seatArray = oldArray;
    },
    //重置座位
    resetSeat() {
      //将所有座位的值变为0
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] !== -1) {
            oldArray[i][j] = 0;
          }
        }
      }
      this.seatArray = oldArray;
    },
    //选定且购买座位
    buySeat() {
      //遍历seatArray，将值为1的座位变为2
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] === 1) {
            oldArray[i][j] = 2;
          }
        }
      }
      this.seatArray = oldArray;
    },
    // 确认座位
    sureSeat() {
      this.$router.push({ path: "/cinema/order" });
      this.$store.commit("cinema/setSelectedSeat", this.selectedSeat);
    },
  },
  computed: {
    sureable() {
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (this.seatArray[i][j] === 1) {
            return true;
          }
        }
      }
      return false;
    },
    selectedSeat() {
      var result = [];
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (this.seatArray[i][j] === 1) {
            result.push([i, j]);
          }
        }
      }
      return result;
    },
    // 已购座位
    boughtSeat() {
      return this.$store.state.cinema.boughtSeat;
    },
  },
  created() {
    // 根据路由参数  获取 影片信息  和 影厅信息
    // 初始化 座位
    this.initSeatArray(this.seatRow, this.seatCol);
  },
  mounted() {
    this.buySeat();
  },
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/style/common/common.scss";

.seat-block {
  width: 100%;
  height: 312px;
  display: flex;
  .seat-side {
    width: 20px;
    height: 100%;
    padding: 36px 0;
    box-sizing: border-box;
    background-color: $baseBgLightColor;
    margin-left: 10px;
    border-radius: 12px;
    :nth-child(3n + 1) {
      margin-top: 10px;
    }
    :nth-child(1) {
      margin-top: 0;
    }
    .side-item {
      width: 20px;
      height: 25px;
      line-height: 25px;
      color: #fff;
    }
  }
  .inner-seat-wrapper {
    flex: 1;
    padding: 36px 0;
    box-sizing: border-box;
    .row {
      height: 25px;
      width: 300px;
      margin: 0 auto;
    }
    :nth-child(3n + 1) {
      margin-top: 10px;
    }
    :nth-child(1) {
      margin-top: 0;
    }
    .seat {
      width: 25px;
      height: 25px;
      float: left;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      .inner-seat {
        width: 80%;
        height: 80%;
        cursor: pointer;
        border-radius: 3px;
        background-color: #d8d8d8;
      }
      .selected-seat {
        background-color: #6548a9;
      }
      .unselected-seat {
        background-color: #909294;
      }
      .bought-seat {
        background-color: #f9c34a;
      }
    }
  }
  ::v-deep.tips {
    font-size: 16px;
    line-height: 22px;
    span {
      width: 50px;
      height: 21px;
      border: 1px solid #979797;
    }
    .active {
      background-color: #6548a9;
    }
  }
}
</style>



