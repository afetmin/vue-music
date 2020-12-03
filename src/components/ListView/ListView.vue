<template>
  <div class="listview">
    <ul>
      <li
        v-for="(group, index) in data"
        class="list-group"
        :key="index"
        ref="listGroup"
      >
        <h2 class="list-group-title">{{ group.title }}</h2>
        <uL>
          <li
            @click="selectItem(item)"
            v-for="(item, index) in group.items"
            :key="index"
            class="list-group-item"
          >
            <img class="avatar" v-lazy="item.avatar" />
            <span class="name">{{ item.name }}</span>
          </li>
        </uL>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.listview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: px2rem(20);
      .list-group-item {
        display: flex;
        align-items: center;
        padding: 20px 0 0 30px;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          .name {
            margin-left: 20px;
            font-size: px2rem(18);
          }
        }
      }
    }
  }
}
</style>
