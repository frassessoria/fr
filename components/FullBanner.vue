<template>
    <div class=fullBanner>
        <img src="~static/images/banner.jpg" alt="Agilidade, Segurança e precisão">
        <div class=msgBanner>
            <div class="text">
                Desde 2006, assessoramos pessoas jurídicas, físicas, empresas, escritórios de advocacia e também
diretamente o cidadão comum, parte ou união, emações cíveis,trabalhistas e previdenciárias.
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@colorBackgroundBanner: #EAC068;
.fullBanner{
    width: 100%;
    img{
        width: 100%;
    }
}
.msgBanner{
    background: @colorBackgroundBanner;
    padding:40px;
    margin-top:-5px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.2em;
    .text{
        max-width: 800px;
    }
}
</style>