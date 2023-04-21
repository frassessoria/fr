<template>
    <div class="line">
        <div class="content">
            <div class="info">
                <div class="title">
                    <strong> Fale </strong> Conosco
                </div>
                <div class="text">
                    Preencha o formulário . Em breve entraremos em contato com você.
                </div>
                <div class="address">
                    Rua dos Andrades, n 1781, conj 1805 - Centro, Porto Alegre / RS.
                </div>
                <div class="social">
                    <img src="~static/icons/facebook.svg" alt="Facebook">
                    <img src="~static/icons/instagram.svg" alt="Instagram">
                    <img src="~static/icons/linkedin.svg" alt="LinkedIn">
                </div>
            </div>
            <div class="form">
                <div style="display: flex;flex-direction: column;justify-content: center;align-content: center;align-items: center">
                    <div class="form-row">
                    <form action="" class="form-box" @submit="checkForm">
                        <div class="field">
                        <input v-model="name" type="text" name="name" placeholder="Nome">
                        </div>
                        <div class="field">
                        <input v-model="tel" type="text" name="tel" placeholder="Telefone">
                        </div>
                        <div class="field">
                        <input v-model="email" type="text" name="email"  placeholder="Email">
                        </div>
                        <div class="field">
                        <textarea v-model="msg" name="msg" placeholder="Mensagem"  rows="5">

                        </textarea>
                        </div>
                        <button type="submit" class="cta-block send-form">
                        {{ btn }}
                        </button>
                    </form>
                    </div>
                    <div v-if="errors.length" class="msg-error">
                    <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ContactForm",
    data: function() {
        return {
            errors: [],
            name:null,
            email:null,
            msg:null,
            tel:null,
            btn: 'Enviar'
        }
    },
    methods:{
        checkForm: function(e) {
            this.btn = 'Enviando...'

            this.errors = []

            if (!this.name) {
                this.errors.push('Nome é obrigatório');
            }

            if (!this.email) {
                this.errors.push('Email é obrigatório');
            }

            if (!this.msg) {
                this.errors.push('Uma mensagem é obrigatória');
            }

            if (!this.tel) {
                this.errors.push('Telefone é obrigatório')
            }

            e.preventDefault();

            if (this.name && this.email && this.msg) {
                const url = 'https://sender.lio.digital/email/send'
                // const url = 'http://192.168.100.136:8181/email/send'
                const msgBody = JSON.stringify({
                from:this.email,
                to:'contato@appto.com.br',
                subject:'Contato via Formulário: '+this.name,
                text:this.msg
                })

                fetch(url,{
                    method:'POST',
                    headers: {
                        'signature': 'acc6a31daa43161b626de8ab3de5e1e70ad5a4c0',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin':'*'
                    },
                    body: msgBody,
                    mode:'cors'
                }).then((r) => r.json())
                .then((r) => {
                    this.btn = 'Mensagem enviada!'
                    this.name = null
                    this.email = null
                    this.msg = null
                    // this.$ga.event('botao','clique','contato')
                    // console.log('call contact event')
                    setTimeout(() => {
                        this.btn = 'Enviar'
                    },4000)
                }).catch((e) => {
                // console.log(e)
                this.errors.push('Falha ao enviar e-mail, entre em contato com o suporte')
                })
            }
        }
    }
}
</script>

<style scoped lang="less">
@mainColor: #E6E7E8;
@secondaryColor: #EAC068;
.line{
    background:@mainColor;
    justify-content: center;
    display: flex;
    padding-bottom:40px;
    padding-top:10px;
}
.content{
    padding:20px;
    width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.title{
    font-size: 2.4em;
}
.info{
    display: flex;
    flex-direction: column;
    max-width: 400px;
}
.text{
    margin-top:20px;
}
.address{
    margin-top:20px;
}
.social{
    display: flex;
    align-items: center;
    margin-top:24px;
    img{
        margin-right: 8px;
        height: 36px;
    }
}
// init form css
.form-row{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px auto 10px auto;
}
.form-box{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
//   box-shadow: 0px 5px 15px #ccc;
  border-radius: 10px;
}
.field input, textarea{
  padding: 20px;
  width: 450px;
  margin-bottom:10px;
  border-radius: 5px;
  border:1px solid #eee;
}
.send-form{
  cursor: pointer;
}
button{
  border: none;
  outline: 0 !important;
  color:#444;
  background:@secondaryColor;
  font-weight: 600;
  padding:6px 60px;
  font-size: 1.2em;
}
button:active{
  border:none!important;
  outline: 0 !important;
}
button:target{
  border:none !important;
  outline: 0 !important;
}
button:focus{
  border:none !important;
  outline: 0 !important;
}
form:active{
  border:none;
  outline: 0 !important;
}
input:focus, textarea:focus{
  outline: 0 !important;
}
.msg-error{
  //margin:auto;
  //width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin-top:10px;
}
@media only screen and (max-width: 768px) {
    .content{
      flex-direction: column;
    }
    .form{
        width:100%;
    }
    .form-row{
        width: 100%;
        margin:0;
    }
    .form-box{
        padding: 0px;
        width: 100%;
        margin-top:40px;
    }
    .field{
        width: 100%;
        input, textarea{
        width: 100%;
        }
    }
}
</style>