<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" @change="handleInputChange" :value="inputValue" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="viewList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="cbStatusChanged(item.id)">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneLength}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button :type="viewKey==='all'?'primary':'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey==='undone'?'primary':'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey==='done'?'primary':'default'" @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="clearAllDone">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  data() {
    return {}
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapMutations([
      'setInputValue',
      'addItem',
      'removeItem',
      'changeStatus',
      'clearDone',
      'changeViewKey'
    ]),
    ...mapActions(['getList']),
    //监听文本框内容变化
    handleInputChange(e) {
      this.setInputValue(e.target.value)
    },
    //点击添加按钮向列表中新增项
    addItemToList() {
      if (this.inputValue.trim().length === 0) {
        return this.$message.warning('请输入内容')
      }
      this.addItem()
    },
    //点击删除
    removeItemById(id) {
      this.removeItem(id)
    },
    cbStatusChanged(id) {
      this.changeStatus({ id, status: event.target.checked })
    },
    //清楚所有已完成任务
    clearAllDone() {
      this.clearDone()
    },
    changeList(key) {
      this.changeViewKey(key)
    }
  },
  computed: {
    ...mapState(['inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'viewList'])
    // list() {
    //   return this.$store.state.list
    // }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
