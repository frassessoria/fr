<template>
    <div>
        <MobileMenu/>
        <TopBar/>
        <div class=containerHeader>
            <div class="content">
                <NuxtLink to="/" class=logo>
                    <img src="~static/icons/logo.svg" alt="FR Assessoria">
                </NuxtLink>
                <div>
                    <MainMenu/>
                    <div @click="callSideBar" id="mobile-menu" class="mobile-menu">
                        <img src="~static/icons/menu_mobile.svg" alt="mobile menu">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MainHeader",
    methods:{
        callSideBar: () => {
        const sideBar = document.getElementById('mobile-sidebar');
            sideBar.classList.remove('hide');
            sideBar.classList.add('show');
        }
    }
}
</script>

<style scoped lang="less">
@mainColor: #231F20;
.containerHeader{
    background: @mainColor;
    color:#fff;
    display: flex;
    justify-content: center;
}
.content{
    width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.logo{
    width: 280px;
    padding:10px;
    margin:10px 0;
}
.mobile-menu{
    display: none;
}
@media only screen and (max-width: 768px){
    .mobile-menu{
        display: flex;
        img{
            width: 32px;
            border-radius: 5px;
            margin-right:20px;
        }
    }
}
</style>