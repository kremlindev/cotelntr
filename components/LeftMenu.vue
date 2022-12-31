<template>
    <v-card style='z-index:20001;'>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
          location="right"
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://i.pinimg.com/736x/6c/c3/36/6cc336714425b2ad3622297a3b118b82.jpg"
              title="Yōkoso Jitsuryoku Shijō Shugi no Kyōshitsu e"
              subtitle="Light Novel Türkçe"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <NuxtLink class="text-decoration-none text-white" to="/"><v-list-item prepend-icon="mdi-book-open-blank-variant" title="Light Novel" value="lightnovel"></v-list-item></NuxtLink>
            <NuxtLink class="text-decoration-none text-white" to="/volumes"><v-list-item prepend-icon="mdi-bookmark-box-multiple" title="Ciltler" value="volumes"></v-list-item></NuxtLink>
            <NuxtLink class="text-decoration-none text-white" to="/characters"><v-list-item prepend-icon="mdi-account-multiple" title="Karakterler" value="characters"></v-list-item></NuxtLink>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
</template>