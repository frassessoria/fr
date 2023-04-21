<template>
  <div>
  <MainHeader/>
  <FullBanner/>
  <OurServices/>
  <div class="servicesList">
      <div class="content">
          <div class="service">
              <div class="title">
                  Perícia Cível
              </div>
              <div class="text">
                  Nas ações cíveis, elaboramos cálculos para instrução de iniciais de revisionais de contratos bancários, tais como, empréstimos, leasing, sistema financeiro de habitação, contratos de cartão de crédito, conta corrente, financiamentos em geral, entre outros.

Como é concebido no âmbito cível, as revisionais de contratos bancários em andamento pressupõem a elaboração de cálculo para depósito em juízo dos valores entendidos como corretos, daí a importância da contratação de profissional qualificado para a elaboração destes.
              </div>
          </div>
          <div class="service">
              <div class="title">
                Perícia Trabalhista
              </div>
              <div class="text">
                  Com ampla experiência na área trabalhista, nossa empresa conta com profissionais qualificados atuantes no âmbito pericial contábil a mais de sete anos.

Nas ações com rito sumaríssimo elaboramos os cálculos para instrução da inicial. Tal procedimento é de suma importância para esse tipo de ação, tendo em vista que a sentença e os cálculos liquidatórios devem limitar-se ao pedido.

Na fase instrução, acompanhamos os laudos contábeis apresentados por perito judicial, impugnando-os, quando necessário. Da mesma forma, apresentamos demonstrativos das eventuais diferenças postuladas, a fim de formar o convencimento do juízo.


              </div>
          </div>
      </div>
  </div>
  <GoogleMap/>
  <MainFooter/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head:{
    title:'FR Assessoria Empresarial | Porto Alegre',
    meta:[
      {
        hid:'description',
        name:'description',
        content:'Desde 2006, assessoramos pessoas jurídicas, físicas, empresas, escritórios de advocacia e também diretamente o cidadão comum.'
      }
    ]
  }
}
</script>
<style scoped lang="less">
@secondaryColor:#EAC068;
.servicesList{
    display: flex;
    justify-content: center;
    margin-bottom:40px;
    .content{
        width: 1140px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}
.service{
    background:@secondaryColor;
    margin-bottom:20px;
    padding:40px;
    .title{
        font-size:2em;
        font-weight: 600;
        margin-bottom:16px;
    }
}
</style>
