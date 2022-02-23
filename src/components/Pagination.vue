<template>
  <div class="pagination">
    <v-btn
      fab
      color="indigo darken-1"
      class="mx-1"
      :disabled="currentPage === 1"
      @click="onPaginate(1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      fab
      color="indigo darken-1"
      class="mx-1"
      :disabled="currentPage === 1"
      @click="onPaginate(currentPage - 1)"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <span v-if="currentPage - 1 > range">...</span>
    <v-btn
      fab
      color="indigo lighten-1"
      class="mx-1"
      v-for="n in pages"
      :key="n"
      :disabled="n === currentPage"
      @click="onPaginate(n)"
    >
      {{ n }}
    </v-btn>
    <span v-if="lastPage - currentPage > range">...</span>
    <v-btn
      fab
      color="indigo darken-1"
      class="mx-1"
      :disabled="currentPage === lastPage"
      @click="onPaginate(currentPage + 1)"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
    <v-btn
      fab
      color="indigo darken-1"
      class="mx-1"
      :disabled="currentPage === lastPage"
      @click="onPaginate(lastPage)"
    >
      <v-icon>mdi-chevron-right</v-icon>
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
import debounce from "lodash.debounce";
export default {
  name: "Pagination",
  props: {
    range: Number,
    lastPage: Number
  },
  computed: {
    pages() {
      const prevPages = Array.from(
        { length: this.range },
        (_, idx) => --idx + this.currentPage - this.range + 1
      );
      const nextPages = Array.from(
        { length: this.range },
        (_, idx) => ++idx + this.currentPage
      );
      const allPages = [
        ...new Set([...prevPages, this.currentPage, ...nextPages])
      ].filter(n => 0 < n && n <= this.lastPage);
      return allPages;
    },
    ...mapState(["currentPage"])
  },
  methods: {
    onPaginate: debounce(function(page) {
      this.$store.dispatch("FETCH_NEWS_LIST", {
        page: page
      });
    }, 250)
  }
};
</script>

<style scoped>
.pagination{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
button {
  font-size: 20px;
}
@media only screen and (max-width: 480px) {
  .v-btn{
    margin: 10px;
  }
}
</style>