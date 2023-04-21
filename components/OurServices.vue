<template>
    <div class="row centered">
        <div class="content">
            <div class="item mainTitle">
                Nossos <br>
                <strong>Serviços </strong>
            </div>
            <div class="item featured">
                <img src="~static/icons/pericia_civel.svg" height="44" alt="Perícia Cível">
                Perícia <br> Cível
            </div>
            <div class="item featured">
                <img src="~static/icons/pericia_trabalhista.svg" height="44" alt="Perícia Trabalhista">
                Perícia<br>Trabalhista
            </div>
            <div class="item featured">
                <img src="~static/icons/pericia_previdenciaria.svg" height="44" alt="Perícia Previdenciaria">
                Perícia<br>Previdenciaria
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@mainColor:#EAC068;
@secondaryColor: #231F20;
.content{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 60px 0;
    align-items: center;
}
.item{
    padding:20px;
}
.mainTitle{
    font-size: 2em;
    color:@mainColor;
}
.item.featured{
    background: @secondaryColor;
    color:#fff;
    padding:30px;
    display: flex;
    min-width: 260px;
    align-items: center;
    justify-content: center;
    img{
        margin-right:12px;
    }
}
@media only screen and (max-width: 768px) {
    .content{
        flex-direction: column;
    }
    .item.featured{
        margin-bottom:20px;
    }
}
</style>