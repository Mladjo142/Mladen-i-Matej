<template>
    <v-container>
    <v-row>
      <v-col align-self="center">
      <NewsSearch v-if="!isLoading"/>
      <v-alert v-if="isError" class="my-5 mx-auto" width="500px" type="error">
        Nesto nije u redu. Molimo vas, pokusajte ponovo!
      </v-alert>
    
      <NewsList v-else :news="news" :lastPage="lastPage" />
      </v-col>
      
    </v-row>
      <v-progress-circular
        v-if="isLoading"
        :size="50"
        class="my-5"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-container>
  
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    NewsList: () =>
      import( "@/components/NewsList.vue"),
    NewsSearch: () =>
      import("@/components/NewsSearch.vue")
  },
  computed: mapState(["news", "lastPage", "isError", "isLoading"]),
  beforeRouteEnter(to, from, next) {
    next(async vm => {
      vm.$store.dispatch("FETCH_NEWS_LIST", {});
    });
  }
};
</script>

