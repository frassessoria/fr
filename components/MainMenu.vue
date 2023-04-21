<template>
    <div class=menu>
        <NuxtLink to="/quem_somos" class="item">
            Quem somos
        </NuxtLink>
        <NuxtLink to="/servicos" class="item">
            Serviços
        </NuxtLink>
        <a href="https://intranet.frassessoria.com" class="item">
            Intranet
        </a>
        <NuxtLink to="/contato" class="item">
            Contato
        </NuxtLink>
    </div>
</template>
<style scoped lang="less">
@mainColor: #EAC068;
.menu{
    display: flex;
}
.item{
    color:@mainColor;
    margin-left:24px;
    cursor: pointer;
    text-decoration: none;
}
@media only screen and (max-width: 768px) {
    .menu{
        display: none;
    }
}
</style>