<template>
  <div class="wrap">
    <div class="con">
      <img src="https://ws1.sinaimg.cn/large/005N37m4gy1fqa3y0kilpj30b40b4t8t.jpg" alt="" class="avtar">
      <p>追剧管家后台管理系统</p>
      <p>Made By <a href="https://github.com/liyushilezhi" target="_blank">是李宇呀丶</a></p>
      <p>Inspire By <a href="https://github.com/mengdu" target="_blank">mengdu</a></p>
      <p>slogan: 我的心愿是,世界和平</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
.wrap{
  width: 18%;
  background: #fff;
  margin: 140px auto auto auto;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  .con{
    padding: 20px;
    width: 100%;
    .avtar{
      display: block;
      border-radius: 50%;
      height: 150px;
      width: 150px;
      margin: 0 auto;
      transition: all .3s;
      cursor: pointer;
      margin-bottom: 10px;
      &:hover{
        transform: scale(1.13);
      }
    }
    p{
      text-align: center;
      font-size: 18px;
    }
    a{
      color:salmon;
    }
  }
}
</style>
