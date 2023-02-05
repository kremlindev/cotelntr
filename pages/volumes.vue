<template>
      <v-app :theme="theme">
    <v-app-bar location="top">
<v-btn @click="send('/')" prepend-icon="mdi-home">Ana Sayfa</v-btn>
<v-btn prepend-icon="mdi-bookmark-box-multiple">Ciltler</v-btn>
<v-btn @click="send('/characters')" prepend-icon="mdi-account-multiple">Karakterler</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>  
    </v-app-bar>

    <v-main class="px-5">
    <div class="d-flex flex-row mb-6 flex-wrap justify-center">
  <v-card
    v-for="item of vols.volumes"
    :key="item"
    class="ma-2 pa-2"
    min-width="275"
    max-width="275"
  >
    <v-img
      :src="item.image"
      height="auto"
      cover
    ></v-img>

    <v-card-title>
      {{  item.name }} ({{ item.no }})
    </v-card-title>

    <v-card-subtitle>
      {{ item.fullname }}
    </v-card-subtitle>

    <v-card-text>
        Kapak: {{ item["cover"].join(", ") }}
        <br/>
        Yayınlanma Tarihi: {{ item.date }}
        <br/>
        Sonraki Cilt: {{ item.next }}
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        color="error"
        variant="text"
        @click="send(item.fandom)"
      >
      <v-icon icon="mdi-fire"></v-icon> Fandom
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>

  </v-card>
  </div>
</v-main>
  </v-app>
</template>
<script setup>
  import { ref } from 'vue'

  const theme = ref('dracula')

  useHead({
    title: "Ciltler - CoteLNTR",
    link: [
        {
            href: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2ccc68f6-b1cd-46f9-b3da-3050a7462aa0/ddzdawm-5ac2e216-d488-49db-b386-74c9b4bf9438.png/v1/fill/w_256,h_256,strp/classroom_of_the_elite_icon_folder_by_assorted24_ddzdawm-fullview.png",
            rel: "icon"
        }
    ]
})

  function onClick () {
    theme.value = theme.value === 'light' ? 'dracula' : 'light'
  }
function send(url) {
    window.location.href = url
}
const vols = {
    "volumeCount": 25,
    "volumes": [
        {
            "name": "Cilt 0",
            "fullname": "Light Novel Cilt 0",
            "no": 24,
            "cover": ["Arisu Sakayanagi", "Kiyotaka Ayanokōji"],
            "date": "23 Aralık 2022",
            "next": "Cilt 1",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059120307077664879/LN_Vol_0_cover.jpg",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_0"
        },
        {
            "name": "Cilt 1",
            "fullname": "Light Novel Cilt 1",
            "no": 1,
            "cover": ["Suzune Horikita", "Kiyotaka Ayanokōji"],
            "date": "25 Mayıs 2015",
            "next": "Cilt 2",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059120901246947459/LN_Vol_01_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_1"
        },
        {
            "name": "Cilt 2",
            "fullname": "Light Novel Cilt 2",
            "no": 2,
            "cover": ["Kikyō Kushida", "Airi Sakura"],
            "date": "25 Eylül 2015",
            "next": "Cilt 3",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059121469055041637/LN_Vol_02_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_2"
        },
        {
            "name": "Cilt 3",
            "fullname": "Light Novel Cilt 3",
            "no": 3,
            "cover": ["Mio Ibuki", "Honami Ichinose"],
            "date": "25 Ocak 2016",
            "next": "Cilt 4",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059122008518033438/LN_Vol_03_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_3"
        },
        {
            "name": "Cilt 4",
            "fullname": "Light Novel Cilt 4",
            "no": 4,
            "cover": ["Yōsuke Hirata", "Kei Karuizawa"],
            "date": "25 Mayıs 2016",
            "next": "Cilt 4.5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059122434340573214/LN_Vol_04_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_4"
        },
        {
            "name": "Cilt 4.5",
            "fullname": "Light Novel Cilt 4.5",
            "no": 5,
            "cover": ["Suzune Horikita"],
            "date": "23 Eylül 2016",
            "next": "Cilt 5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059123029319352370/LN_Vol_4.5_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_4.5"
        },
        {
            "name": "Cilt 5",
            "fullname": "Light Novel Cilt 5",
            "no": 6,
            "cover": ["Kōhei Katsuragi", "Arisu Sakayanagi"],
            "date": "23 Ocak 2017",
            "next": "Cilt 6",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059123824475525140/LN_Vol_05_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_5"
        },
        {
            "name": "Cilt 6",
            "fullname": "Light Novel Cilt 6",
            "no": 7,
            "cover": ["Teruhiko Yukimura", "Haruka Hasebe"],
            "date": "25 Mayıs 2017",
            "next": "Cilt 7",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059126169225666590/LN_Vol_06_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_6"
        },
        {
            "name": "Cilt 7",
            "fullname": "Light Novel Cilt 7",
            "no": 8,
            "cover": ["Hiyori Shiina", "Kakeru Ryūen"],
            "date": "25 Ekim 2017",
            "next": "Cilt 7.5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059127088642269265/LN_Vol_07_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_7"
        },
        {
            "name": "Cilt 7.5",
            "fullname": "Light Novel Cilt 7.5",
            "no": 9,
            "cover": ["Kei Karuizawa"],
            "date": "25 Ocak 2018",
            "next": "Cilt 8",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059127147245084672/LN_Vol_7.5_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_7.5"
        },
        {
            "name": "Cilt 8",
            "fullname": "Light Novel Cilt 8",
            "no": 10,
            "cover": ["Manabu Horikita", "Akane Tachibana"],
            "date": "25 Mayıs 2018",
            "next": "Cilt 9",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059127585210105906/LN_Vol_08_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_8"
        },
        {
            "name": "Cilt 9",
            "fullname": "Light Novel Cilt 9",
            "no": 11,
            "cover": ["Masayoshi Hashimoto", "Masumi Kamuro"],
            "date": "25 Eylül 2018",
            "next": "Cilt 10",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1059127959677579274/LN_Vol_09_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_9"
        },
        {
            "name": "Cilt 10",
            "fullname": "Light Novel Cilt 10",
            "no": 12,
            "cover": ["Miyabi Nagumo", "Nazuna Asahina"],
            "date": "25 Ocak 2019",
            "next": "Cilt 11",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071804425447944202/LN_Vol_10_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_10"
        },
        {
            "name": "Cilt 11",
            "fullname": "Light Novel Cilt 11",
            "no": 13,
            "cover": ["Mei-Yu Wang", "Rokusuke Kōenji"],
            "date": "25 Mayıs 2019",
            "next": "Cilt 11.5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071804947571683439/LN_Vol_11_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_11"
        },
        {
            "name": "Cilt 11.5",
            "fullname": "Light Novel Cilt 11.5",
            "no": 14,
            "cover": ["Honami Ichinose"],
            "date": "25 Eylül 2019",
            "next": "Sene 2 Cilt 1",
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/5/5b/LN_Vol_11.5_cover.jpg",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_Volume_11.5"
        },
        {
            "name": "Yıl 2 Cilt 1",
            "fullname": "Light Novel Yıl 2 Cilt 1",
            "no": 15,
            "cover": ["Kiyotaka Ayanokōji", "Tsubasa Nanase"],
            "date": "24 Ocak 2020",
            "next": "Sene 2 Cilt 2",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071797868819665006/LN_2nd_Year_Vol_01_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_1"
        },
        {
            "name": "Yıl 2 Cilt 2",
            "fullname": "Light Novel Yıl 2 Cilt 2",
            "no": 16,
            "cover": ["Ichika Amasawa", "Kazuomi Hōsen"],
            "date": "25 Haziran 2020",
            "next": "Sene 2 Cilt 3",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071801334757605476/LN_2nd_Year_Vol_02_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_2"
        },
        {
            "name": "Yıl 2 Cilt 3",
            "fullname": "Light Novel Yıl 2 Cilt 3",
            "no": 17,
            "cover": ["Riku Utomiya", "Sakurako Tsubaki"],
            "date": "24 Ekim 2020",
            "next": "Sene 2 Cilt 4",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071802339339538432/LN_2nd_Year_Vol_03_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_3"
        },
        {
            "name": "Yıl 2 Cilt 4",
            "fullname": "Light Novel Yıl 2 Cilt 4",
            "no": 18,
            "cover": ["Takuya Yagami", "Fūka Kiryūin"],
            "date": "24 Şubat 2021",
            "next": "Sene 2 Cilt 4.5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807563391324260/LN_2nd_Year_Vol_04_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_4"
        },
        {
            "name": "Yıl 2 Cilt 4.5",
            "fullname": "Light Novel Yıl 2 Cilt 4.5",
            "no": 19,
            "cover": ["Tsubasa Nanase"],
            "date": "24 Haziran 2021",
            "next": "Sene 2 Cilt 5",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807620127674448/LN_2nd_Year_Vol_4.5_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_4.5"
        },
        {
            "name": "Yıl 2 Cilt 5",
            "fullname": "Light Novel Yıl 2 Cilt 5",
            "no": 20,
            "cover": ["Maya Satō", "Chiaki Matsushita"],
            "date": "24 Ekim 2021",
            "next": "Sene 2 Cilt 6",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807655024275646/LN_2nd_Year_Vol_05_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_5"
        },
        {
            "name": "Yıl 2 Cilt 6",
            "fullname": "Light Novel Yıl 2 Cilt 6",
            "no": 21,
            "cover": ["Kayano Onodera", "Ken Sudō"],
            "date": "24 Şubat 2022",
            "next": "Sene 2 Cilt 7",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807736129532015/LN_2nd_Year_Vol_06_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_6"
        },
        {
            "name": "Yıl 2 Cilt 7",
            "fullname": "Light Novel Yıl 2 Cilt 7",
            "no": 22,
            "cover": ["Ryūji Kanzaki", "Yuki Himeno"],
            "date": "24 Haziran 2022",
            "next": "Sene 2 Cilt 8",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807816467218503/LN_2nd_Year_Vol_07_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_7"
        },
        {
            "name": "Yıl 2 Cilt 8",
            "fullname": "Light Novel Yıl 2 Cilt 8",
            "no": 23,
            "cover": ["Daichi Ishizaki", "Takeko Nishino"],
            "date": "24 Ekim 2022",
            "next": "Sene 2 Cilt 9",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807881663479918/LN_2nd_Year_Vol_08_cover.webp",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_8"
        },
        {
            "name": "Yıl 2 Cilt 9",
            "fullname": "Light Novel Yıl 2 Cilt 9",
            "no": 25,
            "cover": ["Mako Amikura", "Norihito Watanabe "],
            "date": "25 Şubat 2023",
            "next": "Henüz Duyurulmadı",
            "image": "https://cdn.discordapp.com/attachments/775822548519616562/1071807930271285268/1000.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Light_Novel_2nd_Year_Volume_9"
        }
    ]
}
</script>