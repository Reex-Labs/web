<template>
  <section id="faucet" class="py-5">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/ill2.svg"
                class="d-block ml-auto mr-auto"
                max-width="350px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h3 class="font-weight-light display-2 mb-2">Получение REEX</h3>
              <div class="mt-4">
                <h3 class="font-weight-light">
                  Получить Reex вы можете через нашего Telegram-бота <a href="tg://resolve?domain=ReexCoinBot">@ReexCoinBot</a>
                </h3>
                <h4 class="mt-3">Что может наш бот:</h4>
              </div>

              <v-list disabled dark class="transparent">
                <v-list-item>
                  <v-list-item-content>
                    Переводить на ваш кошелек 1 REEX
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    Сгенерировать вам кошелек
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    Проверить баланс
                  </v-list-item-content>
                </v-list-item>
                <v-list-item two-line>
                  <v-list-item-content>
                    Осуществлять переводы
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#faucet {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 550px; */
}

#faucet .container,
#faucet .row {
  height: 100%;
}

.wallet-address-form {
  min-width: 300px;
  width: 30vw;
}
</style>