<template>
  <v-container>
    <v-app-bar absolute flat color="indigo"  dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    <router-link to="/">  <v-toolbar-title class="white--text">FPMOZ</v-toolbar-title></router-link>
    </v-app-bar>

    <v-navigation-drawer color="indigo" v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
         <router-link to="/"> 
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">mdi-home</v-icon>
            </v-list-item-icon>
          <v-list-item-title class="white--text">Pocetna</v-list-item-title>
          </v-list-item>
          </router-link>


               <router-link to="/News">
              <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">mdi-newspaper</v-icon>
            </v-list-item-icon>
             <v-list-item-title class="white--text">Vijesti</v-list-item-title>
          </v-list-item>
          </router-link>

          <router-link to="/search-by-date">
          <v-list-item>
             <v-list-item-icon>
              <v-icon color="white">mdi-magnify</v-icon>
            </v-list-item-icon>
             <v-list-item-title class="white--text">Filtriraj vjesti po datumu</v-list-item-title>
          </v-list-item>
          </router-link>

           <router-link to="/user-crud">
           <v-list-item>
            <v-list-item-icon>
              <v-icon color="white">mdi-account</v-icon>
            </v-list-item-icon>
             <v-list-item-title class="white--text">Users</v-list-item-title>
          </v-list-item>
          </router-link>
        

          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
</style>