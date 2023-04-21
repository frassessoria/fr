<template>
    <div class="row centered">
        <div class="content">
            <div class="infoBox">
                <div class="title">
                    {{title}}
                </div>
                <div class="text">
                    {{info}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SimpleContent",
    props:{
        title: {
            type: String,
            required: false,
            default: function () {
                return '';
            }
        },
        info: {
            type: String,
            required: false,
            default: function () {
                return '';
            }
        }
    }
}
</script>

<style scoped lang="less">
@secondaryColor: #EAC068;
.content{
    background: @secondaryColor;
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding:60px 20px;
    margin-bottom:60px;
    min-height: 390px;
    align-items: flex-start;
    position: relative;
}
.content::before {
    position: absolute;
    content:url(~static/images/justica.png);
    right: 0;
}
.backgroundImage{
    margin-right:-40px;
    max-height: 100%;
}
.title{
    font-size:2em;
    font-weight: 600;
    margin-bottom:30px;
}
.text{
    max-width: 700px;
}
@media only screen and (max-width: 768px) {
    .content::before{
        display: none;
    }
}
</style>