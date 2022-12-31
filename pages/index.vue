<template>
  <LeftMenu/>
  <v-card
    width="full"
    height="auto"
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col cols="96">
          <v-card
            color="#252732"
            theme="dracula"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-img
      height="250"
      src="https://preview.redd.it/can-we-have-this-illustration-as-the-subreddits-banner-v0-uy9t98944l3a1.jpg?auto=webp&s=2bbbe825f635d599be5e2c2597ef76c345c4b019"
      cover
    >
    </v-img>
                <v-card-title class="text-h5">
                    Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e
                </v-card-title>

                <v-card-subtitle>Shōgo Kinugasa</v-card-subtitle>
                <v-card-text>Kōdo Ikusei Lisesi, her öğrencisine %100 istihdam olanağı sağlayan, çok yönlü ve prestijli bir lisedir. Okulun öğrencileri, istedikleri her şeyi yapabilme özgürlüğüne ve istedikleri şekilde giyinebilme özgürlüğüne sahiptirler. Kōdo Ikusei Lisesi, cennet gibi görünmektedir. Ancak bu özel muameleleri, sadece diğerlerinden daha üstün yetenekli öğrenciler kullanabilmektedir. Kahramanımız, Kiyotaka Ayanokōji ise sıkıntılı öğrencilerin toplandığı D sınıfına kabul edilmiştir. Kendince bir sebepten dolayı, Kiyotaka okula giriş sınavını çok önemsememiş, D sınıfına yerleştirilmiştir. Sınıf arkadaşları, Suzune Horikita ve Kikyō Kushida ile tanıştıktan sonra, Kiyotaka’nın durumu değişmeye başlayacaktır… </v-card-text>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

  <v-card
    width="full"
    height="auto"
    class="mx-auto"
  >
  <v-container>
      <v-row dense>
        <v-col cols="96">
      <v-list>
        <v-list-subheader>Bölümler</v-list-subheader>
            <NuxtLink class="text-decoration-none text-white" v-for="item of episodes" :key="item" :to="`/read/y${item.y}/v${item.v}/e${item.e}`"><v-list-item prepend-icon="mdi-book-open-blank-variant" :title="item.title" value="lightnovel"></v-list-item></NuxtLink>
          </v-list>
          </v-col>
          </v-row>
          </v-container>
  </v-card>
  </template>
<script setup>
const episodes = [
  {
    "title": "2. Yıl Cilt 5 Bölüm 20 - Geçmişe Veda",
    "y": "2",
    "v": "5",
    "e": "20"
  }
]
</script>