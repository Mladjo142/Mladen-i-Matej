<template>
  <div class="search-by-date">
    <v-container>
      <NewsSearch />
      <v-alert v-if="isError" class="my-5 mx-auto" width="500px" type="error">
        Greska!
      </v-alert>
      <v-progress-circular
        v-else-if="isLoading"
        :size="50"
        class="my-5"
        color="primary"
        indeterminate
      ></v-progress-circular>
      <NewsList v-else :news="news" :lastPage="lastPage" />
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "search-by-date",
  components: {
    NewsList: () => 
      import( "@/components/NewsList.vue"),
    NewsSearch: () =>
      import( "@/components/NewsSearch.vue")
  },
  computed: mapState(["news", "lastPage", "isError", "isLoading"]),
  beforeRouteEnter(to,from, next) {
    next(async vm => {
      vm.$store.dispatch("FETCH_NEWS_LIST", {});
    });
  }
};
</script>