<template>
  <section id="create" class="d-flex align-center py-5">
    <v-container fluid>
      <v-row justify="center" class="px-10">
        <v-col cols="12" md="auto" class="pr-10">
          <div>
            <h1 class="font-weight-light display-1">Создайте кошелек</h1>
          </div>
          <div>
            <v-btn
              @click="generateNewWallet"
              rounded
              outlined
              large
              class="mt-5"
              >СГЕНЕРИРОВАТЬ</v-btn
            >
          </div>
          <div class="pl-2 pt-5">
            Обязательно сохраните резервную фразу.<br>
            Это постоянный "пароль" вашего кошелька.
          </div>
        </v-col>
        <v-col cols="12" md="5" class="mt-2">
          <v-row>
            <v-col>
              <div class="light">
                Ваш адрес
                <v-btn icon v-if="genAddress" @click="doCopy(genAddress)" small>
                  <v-icon x-small>mdi-content-copy</v-icon>
                </v-btn>
                </div>
              <div class="gen-address">{{ genAddress }}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="light">
                Резервная фраза
                <v-btn icon v-if="genMnemonic" @click="doCopy(genMnemonic)" small>
                  <v-icon x-small>mdi-content-copy</v-icon>
                </v-btn>
              </div>
              <div class="gen-mnemonic">{{ genMnemonic }}</div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div v-if="genAddress && genMnemonic" class="mt-4 px-8 py-4 primary">
        Теперь вы можете перейти в наш Telegram-бот или WEB-кошелек, что бы получать REEX или совершать переводы.
      </div>

      <v-snackbar color="primary" v-model="snackbar" :timeout="2000">
        <div class="ml-4">Скопировано!</div>
        <template v-slot:action="{ attrs }">
          <v-btn class="mr-4" icon v-bind="attrs" @click="snackbar = false">
            <v-icon primary>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </section>
</template>

<script>
// import {db} from '@/main'
import { genAddress } from '../utils/genAddress.js'

export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    genAddress: "",
    genMnemonic: "",
    snackbar: false
  }),

  methods: {
    async generateNewWallet() {
      const { address, mnemonic } = await genAddress()
      this.genAddress = address
      this.genMnemonic = mnemonic
    },
    doCopy(text) {
      const v = this
      this.$copyText(text).then(function (e) {
        v.snackbar = true
      }, function (e) {
      })
    }
  },
};
</script>

<style scoped>
#create {
  background-color: #f4f7f5;
  min-height: 400px;
}

.gen-address {
  overflow: auto;
  font-weight: bold;
  height: 40px;
}

.gen-mnemonic {
  font-weight: bold;
  min-height: 150px;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>