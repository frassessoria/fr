<template>
  <div>
  <MainHeader/>
  <FullBanner/>
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
