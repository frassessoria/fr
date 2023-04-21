<template>
    <div class=topBar>
        <div class="topBarContent">
            <div class="info">
                <img src="~static/icons/phone.svg" class=icon alt="Telefone para contato">
                (51) 3028-2333 | (51) 98173-9300
            </div>
            <div class="info">
                <img src="~static/icons/mail.svg" height="16" alt="Email para contato">
                contato@frassessoria.com
            </div>
            <div class="info">
                <img src="~static/icons/map.svg" height="16" alt="Endereço para contato">
                Rua dos Andradas 1781 Conj. 1805 | Centro - Porto Alegre Brasil
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
@color_secondary: #EAC068;
.topBar{
    background: @color_secondary;
    padding:8px;
    display: flex;
    justify-content: center;
}
.topBarContent{
    width: 1140px;
    display: flex;
    justify-content: flex-start;
}
.info{
    margin-right:24px;
    display: flex;
    align-items: center;
    img{
        margin-right:6px;
    }
    color:#2e292a;
    font-size: 0.8em;
}
.icon{
    width:16px;
    height: 16px;
}
@media only screen and (max-width: 768px) {
    .topBar{
        display: none;
    }
}
</style>