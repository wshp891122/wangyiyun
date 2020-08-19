<template>
  <div class="top">
    <div class="menu">
      三
    </div>
    <ul>
      <li><router-link activeClass="active" to="/me">我的</router-link></li>
      <li><router-link activeClass="active" exact to="/">发现</router-link></li>
      <li><router-link activeClass="active" to="/yuncun">云村</router-link></li>
      <li>
        <router-link activeClass="active" to="/audiopage">视频</router-link>
      </li>
    </ul>
    <div class="search">搜索</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  padding: 10px;
  font-size: 13px;
  justify-content: space-between;
  .menu,
  .search {
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  ul {
    padding: 0 30px;
    display: flex;
    flex: 1;
    li {
      flex: 1;
      line-height: 36px;
      text-align: center;
    }
    a {
      color: #666;
    }
    a.active {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
