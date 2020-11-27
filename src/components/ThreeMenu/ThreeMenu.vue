<template>
  <div class="menu-wrapper">
    <div class="menu-item" v-for="item in menuList" :key="item.id">
      <div class="icon-wrapper">
        <span :class="[item.icon, 'icon']"></span>
      </div>
      <div class="text-wrapper">
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { id: 1, icon: 'icon-fm', text: '私人FM' },
        { id: 1, icon: 'icon-me', text: '每日歌曲推荐' },
        { id: 1, icon: 'icon-sound', text: '云音乐热歌榜' },
      ],
    }
  },
}
</script>
<style lang='scss' scoped>
@import '@/assets/styles/global';
.menu-wrapper {
  @include center;
  height: px2rem(95);
  margin: px2rem(20) 0;
  .menu-item {
    flex: 1 0 px2rem(125);
    width: px2rem(125);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-wrapper {
      width: px2rem(60);
      height: px2rem(60);
      border-radius: 50%;
      background: $menu-color;
      @include center;
      .icon {
        font-size: px2rem(30);
      }
    }
    .text-wrapper {
      height: px2rem(35);
      @include center;
      .text {
        color: $font-color;
        font-size: px2rem(17);
      }
    }
  }
}
</style>
