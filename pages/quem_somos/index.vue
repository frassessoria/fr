<template>
  <div>
  <MainHeader/>
  <FullBanner/>
  <OurServices/>
  <SimpleContent title="Metodologia de trabalho" info="
Além da elaboração e conferencia dos cálculos, que são a nossa atividade por excelência, no decorrer das ações judiciais em que atuamos como perito assistente, elaboramos também as razões dos recursos que se fizerem necessários, tais como, impugnação, embargos e agravos, as quais são enviadas via e-mail devidamente elaboradas nos padrões do escritório contratante.

Assim, além de adiantar o serviço do advogado, este terá total liberdade para efetuar qualquer alteração nas razões de recurso antes de imprimir e assinar para levar à justiça.

Num ambiente em que a disponibilidade de informações ágeis e seguras são imprescindível, mas, condicionada aos rigores dos prazos judiciais, destacamos a atuação de nosso escritório no que se refere ao rigoroso cumprimento dos prazos, eis que temos por norma disponibilizar os processos com, no máximo, 24 horas de antecedência.

Sem jamais descuidar da qualidade e dos resultados buscados, estamos sempre abertos a novas propostas de trabalho e de formas de condução ou apresentação dos mesmos."/> 
  <ContactForm/>
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
