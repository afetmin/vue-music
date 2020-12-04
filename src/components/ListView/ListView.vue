<template>
  <div class="listview">
    <ul>
      <li
        v-for="(group, index) in data"
        class="list-group"
        :key="index"
        ref="listGroup"
      >
        <h2 class="list-group-title">{{ group.label }}</h2>
        <uL>
          <li
            @click="selectItem(item)"
            v-for="(item, index) in group.singers"
            :key="index"
            class="list-group-item"
          >
            <img class="avatar" v-lazy="item.picUrl" />
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
  // position: relative;
  // width: 100%;
  // height: 100%;
  // overflow: hidden;
  .list-group {
    padding-bottom: px2rem(30);
    .list-group-title {
      height: px2rem(30);
      line-height: px2rem(30);
      padding-left: px2rem(20);
      font-size: px2rem(20);
      background: $menu-color;
    }
    & .list-group-item {
      display: flex;
      align-items: center;
      padding: px2rem(20) 0 0 px2rem(30);
      .avatar {
        width: px2rem(60);
        height: px2rem(60);
        border-radius: 50%;
      }
      .name {
        margin-left: px2rem(20);
        font-size: px2rem(18);
      }
    }
  }
}
</style>
