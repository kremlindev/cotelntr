<template>
    <v-app :theme="theme">
        <v-app-bar location="top">
<v-btn @click="send('/')" prepend-icon="mdi-home">Ana Sayfa</v-btn>
<v-btn @click="send('/volumes')" prepend-icon="mdi-bookmark-box-multiple">Ciltler</v-btn>
<v-btn prepend-icon="mdi-account-multiple">Karakterler</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="onClick"
      ></v-btn>  
    </v-app-bar>

    <v-main>
    <div class="d-flex flex-row mb-6 flex-wrap justify-center">
  <v-card
    v-for="item of chars.characters"
    :key="item"
    class="ma-2 pa-2"
    min-width="275"
    max-width="275"
  >
    <v-img
      :src="item.image"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{  item.names.default }} ({{  item.names.jp }})
    </v-card-title>

    <v-card-subtitle>
      {{ item.names.nicknames[0] == 'none' ? 'Takma Adı Yok' : item.names.nicknames.join(",") }}
    </v-card-subtitle>

    <v-card-text>
        {{ item.age == 'Bilinmiyor.' ? 'Yaşı Bilinmiyor.' : item.age + " Yaşında" }}  {{ item.gender == 'female' ? 'Dişil' : 'Eril' }} bir karakter. İlk olarak {{ item.debut.lightnovel }}'de görüldü.
    </v-card-text>
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
        <v-divider></v-divider>
        <v-card-text>
          {{  item.description }}
        </v-card-text>
  </v-card>
  </div>
</v-main>
  </v-app>
</template>
<script setup>
  import { ref } from 'vue'

const theme = ref('dracula')

useHead({
    title: "Karakterler - CoteLNTR",
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
const show = true
function send(url) {
    window.location.href = url
}
const chars = {
    "characterCount": 76,
    "characters": [
        {
            "names": {
                "jp": "佐倉 愛里",
                "default": "Sakura Airi",
                "nicknames": [
                    "Shizuku"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi, Ayanokoji Grubu üyesi.",
            "debut": {
                "lightnovel": "2. Cilt",
                "manga": "2. Cilt 9. Bölüm",
                "anime": "1. Sezon 4. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/2/24/Airi_Sakura_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Airi_Sakura"
        },
        {
            "names": {
                "jp": "橘 茜",
                "default": "Tachibana Akane",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 19,
            "description": "3-A sınıfı sınıf öğrencisi, Öğrenci Konseyi üyesi, Öğrenci Konseyi başkanı Manabu Horikita'nın arkadaşı ve sekreteri.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "3. Cilt 12. Bölüm",
                "anime": "1. Sezon 12. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/6/6a/Akane_Tachibana_CharMug.png/",
            "fandom": "https://you-zitsu.fandom.com/wiki/Akane_Tachibana"
        },
        {
            "names": {
                "jp": "三宅 明人",
                "default": "Miyake Akito",
                "nicknames": [
                    "Miyatchi"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi, Ayanokoji Grubu ve Okçuluk Kulübü üyesi.",
            "debut": {
                "lightnovel": "3. Cilt",
                "anime": "1. Sezon 9. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017770966161563648/Akito_Miyake.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Akito_Miyake"
        },
        {
            "names": {
                "jp": "山田 アルベルト",
                "default": "Yamada Albert",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-C ve 2-B sınıfları sınıf öğrencisi, ABD asıllı bir Japon, Ryuen Kakeru'nun 'koruması' ve arkadaşı.",
            "debut": {
                "anime": "1. Sezon 4. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017771221057818634/Albert_Yamada.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Albert_Yamada"
        },
        {
            "names": {
                "jp": "坂柳 有栖",
                "default": "Sakayanagi Arisu",
                "nicknames": [
                    "Little Girl"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-A ve 2-A sınıfları sınıf öğrencisi, Beyaz Oda kurucusu ve Ayanokoji Kiyotaka'nın Babası olan Profesör Ayanokoji'nin arkadaşı ve Okul müdürü olan Mr. Sakayanagi'nin kızı",
            "debut": {
                "lightnovel": "5. Cilt",
                "manga": "6. Cilt 27. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/d/dc/Arisu_Sakayanagi_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Arisu_Sakayanagi"
        },
        {
            "names": {
                "jp": "坂柳",
                "default": "Mr. Sakayanagi",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": "Yaklaşık 40",
            "description": "Beyaz Oda kurucusu ve Ayanokoji Kiyotaka'nın babası olan Profesör Ayanokoji'nin arkadaşı, Kodo Ikusei Lisesi okul müdürü, Sakayanagi Arisu'nun babası.",
            "debut": {
                "lightnovel": "7. Cilt",
                "anime": "2. Sezon 10. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017771667726028800/Chairman_Sakayanagi.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Chairman_Sakayanagi"
        },
        {
            "names": {
                "jp": "松下 千秋",
                "default": "Matsushita Chiaki",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "4. Cilt 16. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017772040759025664/Chiaki_Matsushita.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Chiaki_Matsushita"
        },
        {
            "names": {
                "jp": "星之宮 知恵",
                "default": "Hoshinomiya Chie",
                "nicknames": [
                    "Chie-chan"
                ]
            },
            "gender": "female",
            "age": 29,
            "description": "1-B ve 2-C sınıfları sınıf öğretmeni, eski Kodo Ikusei Lisesi öğrencisi.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 5. Bölüm",
                "anime": "3. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/4/40/Chie_Hoshinomiya_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Chiaki_Matsushita"
        },
        {
            "names": {
                "jp": "白波 千尋",
                "default": "Shiranami Chihiro",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-B ve 2-C sınıfları sınıf öğrencisi.",
            "debut": {
                "lightnovel": "2. Cilt",
                "manga": "3. Cilt 11. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/5/59/Chihiro_Shiranami_Anime.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Chihiro_Shiranami"
        },
        {
            "names": {
                "jp": "石崎 大地",
                "default": "Ishizaki Daichi",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-C ve 2-D sınıfları sınıf öğrencisi, Ryuen Kakeru'nun arkadaşı ve 'yardakçısı'.",
            "debut": {
                "lightnovel": "2. Cilt",
                "manga": "3. Cilt 12. Bölüm",
                "anime": "1. Sezon 3. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017772774107914240/Daichi_Ishizaki.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Chihiro_Shiranami"
        },
        {
            "names": {
                "jp": "鬼龍院 楓花",
                "default": "Kiryūin Fūka",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 18,
            "description": "2-B ve 3-B sınıfları sınıf öğrencisi.",
            "debut": {
                "lightnovel": "2. Yıl 2. Cilt",
                "anime": "Bu karakter 'Hafif Roman (Light Novel)'ın 2. Yıl 2. cildinde görüldü. Henüz anime adaptasyonunda yer almıyor."
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017773081030303754/Fuka_Kiryuin.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/F%C5%ABka_Kiry%C5%ABin"
        },
        {
            "names": {
                "jp": "長谷部 波瑠加",
                "default": "Hasebe Haruka",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi, Ayanokoji Grubu üyesi.",
            "debut": {
                "lightnovel": "6. Cilt",
                "manga": "5. Cilt 20. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/a/a8/Haruka_Hasebe_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Haruka_Hasebe"
        },
        {
            "names": {
                "jp": "山内春樹",
                "default": "Yamauchi Haruki",
                "nicknames": [
                    "Argos-2"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-D sınıfı sınıf öğrencisi, 'D sınıfının 3 aptalı' olarak adlandırılan grubun bir parçası",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 3. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/1/1f/Haruki_Yamauchi_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Haruki_Yamauchi"
        },
        {
            "names": {
                "jp": "鬼頭 隼",
                "default": "Kitō Hayato",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-A ve 2-A sınıflarının sınıf öğrencisi.",
            "debut": {
                "lightnovel": "7. Cilt",
                "anime": "1. Sezon 6. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017773704433893396/Hayato_Kito.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Hayato_Kit%C5%8D"
        },
        {
            "names": {
                "jp": "外村 秀雄",
                "default": "Sotomura Hideo",
                "nicknames": [
                    "Profesör"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-D ve 2-D sınıflarının sınıf öğrencisi.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "4. Cilt 17. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017774302512291850/Hideo_Sotomura.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Hideo_Sotomura"
        },
        {
            "names": {
                "jp": "時任 裕也",
                "default": "Tokitō Hiroya",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-C ve 2-B sınıfları sınıf öğrencisi.",
            "debut": {
                "lightnovel": "4. Cilt",
                "anime": "Bu karakter yalnızca 'Hafif Roman (Light Novel)'ın 4. cildinde görüldü. "
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017774302709416066/Hiroya_Tokito.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Hiroya_Tokit%C5%8D"
        },
        {
            "names": {
                "jp": "椎名 ひより",
                "default": "Shiina Hiyori",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-C ve 2-B sınıfları sınıf öğrencisi, Ayanokoji Kiyotaka ile kütüphanede veya kütüphane dışında kitaplar hakkında konuşarak arkadaş oldular.",
            "debut": {
                "lightnovel": "6. Cilt",
                "anime": "2. Sezon 7. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017774302927536208/Hiyori_Shiina.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Hiyori_Shiina"
        },
        {
            "names": {
                "jp": "一之瀬 帆波",
                "default": "Ichinose Honami",
                "nicknames": [
                    "Sınıf Temsilcisi Ichinose"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-B ve 2-C sınıfları sınıf öğrencisi ve sınıf lideri. 1-D/C ve 2-A sınıfları ile yapılan ittifakların 1 numaralı karakteri.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 5. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/7/7b/Honami_Ichinose_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Honami_Ichinose"
        },
        {
            "names": {
                "jp": "天沢 一夏",
                "default": "Amasawa Ichika",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 16,
            "description": "Kodo Ikusei Lisesi 1-A sınıfı ve Beyaz Oda 5. Kuşak öğrencisi.",
            "debut": {
                "lightnovel": "2. Yıl 2. Cilt",
                "anime": "Bu karakter ilk olarak 'Hafif Roman (Light Novel)'ın 2. Yıl 1. cildinde görüldü. Henüz anime adaptasyonunda yer almıyor."
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017775306356043857/Ichika_Amasawa.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Ichika_Amasawa"
        },
        {
            "names": {
                "jp": "桐山 生叶",
                "default": "Kiriyama Ikuto",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 18,
            "description": "2-B ve 3-B sınıfları sınıf öğrencisi, serinin 2. öğrenci konseyi olan Nagumo Miyabi'nin yardımcısı olarak Öğrenci Konseyi Başkan Yardımcısı sıfatına sahip. Nagumo Miyabi'ye düşman bir tavrı var. Manabu Horikita'nın büyük bir destekçisiydi.",
            "debut": {
                "lightnovel": "7,5. Cilt",
                "anime": "Bu karakter ilk olarak 'Hafif Roman (Light Novel)'ın 7,5. cildinde görüldü. Henüz anime adaptasyonunda yer almıyor."
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017775306595127346/Ikuto_Kiriyama.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Ikuto_Kiriyama"
        },
        {
            "names": {
                "jp": "龍園 翔",
                "default": "Ryūen Kakeru",
                "nicknames": [
                    "Ejder Çocuk",
                    "Bay Yaramaz"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-C ve 2-B sınıflarının sınıf öğrencisi ve bir bölüm dışında lideri, agresif tavırları ve okul kurallarını umursamaz stratejileri ile tüm okul tarafından dikkati üzerine çekti. Kōenji Rokusuke ile olan 'sürtüşmelerinin' ardından 'Ejder Çocuk' ve 'Bay Yaramaz' lakaplarını aldı.",
            "debut": {
                "lightnovel": "3. Cilt",
                "manga": "4. Cilt 15. Bölüm",
                "anime": "1. Sezon 3. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/0/0a/Kakeru_Ry%C5%ABen_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kakeru_Ry%C5%ABen"
        },
        {
            "names": {
                "jp": "池 寛治",
                "default": "Ike Kanji",
                "nicknames": [
                    "Argos-1"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi, 'D sınıfının 3 aptalı' olarak adlandırılan grubun bir parçası.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 3. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/6/67/Kanji_Ike_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kanji_Ike"
        },
        {
            "names": {
                "jp": "司馬 克典",
                "default": "Shiba Katsunori",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": "Bilinmiyor.",
            "description": "2. yıl 1-D sınıfı sınıf öğretmeni ve eski bir Kodo Ikusei Lisesi öğrencisi.",
            "debut": {
                "lightnovel": "2. Yıl 1. Cilt",
                "anime": "Bu karakter ilk olarak 'Hafif Roman (Light Novel)'ın 2. Yıl 1. cildinde görüldü. Henüz anime adaptasyonunda yer almıyor."
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017775306829987880/Katsunori_Shiba.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Katsunori_Shiba"
        },
        {
            "names": {
                "jp": "小野寺 かや乃",
                "default": "Onodera Kayano",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfı sınıf öğrencisi, yüzme alanında iyi olduğu söyleniyor. Basketbolda da fena değilmiş!",
            "debut": {
                "lightnovel": "1. Cilt",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017775307081662474/Kayano_Onodera.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kayano_Onodera"
        },
        {
            "names": {
                "jp": "坂上 数馬",
                "default": "Sakagami Kazuma",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": "Bilinmiyor.",
            "description": "1-C ve 2-B sınıfları sınıf öğretmeni.",
            "debut": {
                "lightnovel": "2. Cilt",
                "manga": "3. Cilt 12. Bölüm",
                "anime": "1. Sezon 5. Bölüm"
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017757975059894282/Kazuma_Sakagami.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kazuma_Sakagami"
        },
        {
            "names": {
                "jp": "宝泉 和臣",
                "default": "Hōsen Kazuomi",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "male",
            "age": 16,
            "description": "1-D sınıfı öğrencisi ve lideri. Kiyotaka Ayanokoji'yi sol elinden bıçakla yaralayan kişi.",
            "debut": {
                "lightnovel": "2. Yıl 1. Cilt",
                "anime": "Bu karakter ilk olarak 'Hafif Roman (Light Novel)'ın 2. Yıl 1. cildinde görüldü. Henüz anime adaptasyonunda yer almıyor."
            },
            "image": "https://cdn.discordapp.com/attachments/1017693843744886855/1017775307303948309/Kazuomi_Hosen.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kazuomi_H%C5%8Dsen"
        },
        {
            "names": {
                "jp": "軽井沢 恵",
                "default": "Karuizawa Kei",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi ve kız gruplarının lideri. Ayanaokoji Kiyotaka'nın kız arkadaşı. Yosuke Hirata'nın eski 'sahte' kız arkadaşı.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 4. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/e/e1/Kei_Karuizawa_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kei_Karuizawa"
        },
        {
            "names": {
                "jp": "須藤 健",
                "default": "Sudō Ken",
                "nicknames": [
                    "Argos-3",
                    "Kızıl Saç"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi. 'D sınıfının 3 aptalı' olarak adlandırılan grubun bir parçası. Basketbol kulübü üyesi. 2. sınıflar arasında fiziksel seviyesi A+ (96) olan tek öğrenci. Suzune Horikita'ya platonik aşık.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 1. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/1/14/Ken_Sud%C5%8D_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Ken_Sud%C5%8D"
        },
        {
            "names": {
                "jp": "櫛田 桔梗",
                "default": "Kushida Kikyō",
                "nicknames": [
                    "none"
                ]
            },
            "gender": "female",
            "age": 17,
            "description": "1-D ve 2-D sınıfları sınıf öğrencisi, tüm sınıf hatta tüm okul ile iyi geçinen biri. İçidne barındırdığı şeytanı gizlemek için Horikita Suzune, Takuya Yagami ve Kiyotaka Ayanakoji'yi okuldan attırmak en büyük gayesi.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 0,5. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/7/77/Kiky%C5%8D_Kushida_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kiky%C5%8D_Kushida"
        },
        {
            "names": {
                "jp": "綾小路 清隆",
                "default": "Ayanokōji Kiyotaka",
                "nicknames": [
                    "Argos-4",
                    "Kiyopon",
                    "Ayanon",
                    "X",
                    "Deha",
                    "Canavar",
                    "Şeytani 4. Neslin Şeytanı",
                    "Kral",
                    "Başyapıt",
                    "Kusursuz İnsan"
                ]
            },
            "gender": "male",
            "age": 17,
            "description": "Elitler Sınıfı serisinin baş karakteri ve anlatıcısıdır. 1-D ve 2-D sınıflarının bir öğrencisi olmakla beraber Beyaz Oda 4. Neslin de bir öğrencisidir. Beyaz Oda öğrencileri arasında 'başyapıt' olarak adlandırılıp daha iyisi olmadığı belirtilmektedir. Beyaz Oda kurucusu Profesör Ayanakoji'nin oğlu ve Kei Karuizawa'nın erkek arkadaşıdır. Ayrıca Ayanokoji grubunun da bir üyesidir.",
            "debut": {
                "lightnovel": "1. Cilt",
                "manga": "1. Cilt 0,5. Bölüm",
                "anime": "1. Sezon 1. Bölüm"
            },
            "image": "https://static.wikia.nocookie.net/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e/images/a/ae/Kiyotaka_Ayanok%C5%8Dji_CharMug.png",
            "fandom": "https://you-zitsu.fandom.com/wiki/Kiyotaka_Ayanok%C5%8Dji"
        }
    ]
}
</script>