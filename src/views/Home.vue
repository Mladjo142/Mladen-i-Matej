<template>
  <v-container class="pt-16">
    <v-row justify="space-around">
      <v-card width="1200">
        <v-img
          height="200px"
          contain
          src="https://camo.githubusercontent.com/357f56184da9de32ccc85e38e79836b6431abacb53d2119abff708966d528657/68747470733a2f2f63646e2e767565746966796a732e636f6d2f646f63732f696d616765732f6c6f676f732f767565746966792d6c6f676f2d6c696768742d746578742e737667"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="text-h6 indigo--text pl-0">
              Opis rada
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="white" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-16">
            <v-avatar size="56">
              <img
                alt="logo"
                src="https://w7.pngwing.com/pngs/178/551/png-transparent-vue-js-javascript-framework-front-and-back-ends-github-technical-angle-text-triangle.png"
              />
            </v-avatar>
            <p class="ml-3 indigo--text">FPMOZ</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Timeline projekta</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        message: ` 1 Opis broj 1?`,
      },
      {
        message: `2 Opis broj 2?`,
      },
      {
        message: `3 Opis broj 3?`,
      },
          {
        message: ` 4 Opis broj 4?`,
      },
      {
        message: `5 Opis broj 5?`,
      },
      {
        message: `6 Opis broj 6?`,
      },
          {
        message: ` 7 Opis broj 7?`,
      },
      {
        message: `8 Opis broj 8?`,
      },
      {
        message: `9 Opis broj 9?`,
      },
    ],
  }),
};
</script>

<style>
</style>