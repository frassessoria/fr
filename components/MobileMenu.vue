<template>
  <div>
    <div id="mobile-sidebar" class="mobile-sidebar">
      <div class="menu-logo">
        <img src="/images/appto_white.svg" alt="" height="220px">
        <div @click="hideMenu" id="menu-close" class="menu-close">
          X
        </div>
      </div>
      <div class="menu-items">
        <nuxt-link to="/" @click.native="hideMenu" class="m-item">
          Home
        </nuxt-link>
        <NuxtLink @click.native="hideMenu" to="/quem_somos" class="m-item">
          Quem Somos
        </NuxtLink>
        <NuxtLink @click.native="hideMenu" to="/servicos" class="m-item">
          Serviços
        </NuxtLink>
        <a href="https://intranet.frassessoria.com" class="m-item">
          Intranet
        </a>
        <NuxtLink @click.native="hideMenu" to="/contato" class="m-item">
          Contato
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobile-menu",
  methods:{
    hideMenu() {
      const sidebar = document.getElementById('mobile-sidebar');
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
      setTimeout(function() {
        sidebar.classList.remove('hide');
      },300);
    }
  }
}
</script>

<style scoped lang="less">
.mobile-sidebar{
  background: #000;
  height: 100%;
  display: none;
  position:fixed;
  z-index: 999;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.mobile-sidebar.hide{
  display: flex;
  animation: slide-right .4s;
  opacity: 0;
}
.mobile-sidebar.show{
  display: flex;
  animation: slide-left .4s;
  opacity: 1;
}
.menu-logo{
  display: flex;
  color:#ccc;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding:15px 25px;
  height: 10%;
  img{
    width: 220px;
  }
  .menu-close{
    padding: 2px 10px;
    border:2px solid #ccc;
    font-size:18px;
    border-radius: 5px;
  }
}
.menu-items{
  height: 90%;
  display: flex;
  flex-direction: column;
  color:#fff;
  justify-content: center;
  align-items: center;
  .m-item{
    display: flex;
    justify-content: center;
    text-decoration: none;
    color:#fff;
    //margin-top:10px;
    padding-bottom:10px;
    margin-bottom:10px;
    font-size:22px;
    width: 100%;
    border-bottom:1px solid #1f1f1f;
    cursor: pointer;
  }
  .m-item:last-of-type{
    border-bottom:none;
  }
}
@keyframes slide-left {
  0% {
    opacity: 1;
    transform: translate3d(280px,0px,20px);
  }
  60% {
    //opacity: 1;
    transform: translate3d(-10px,0,0px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px,0,0);
  }
}
@keyframes slide-right {
  0% {
    opacity: 1;
    transform: translate3d(0px,0px,20px);
  }
  40% {
    opacity: 0.9;
    transform: translate3d(-10px,0,0px);
  }
  100% {
    opacity: 0.3;
    transform: translate3d(460px,0,0);
  }
}
</style>
