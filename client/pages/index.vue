<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <ul>
        <li v-for="session in sessions" :key="session.id">{{session.limit + ' ' + session.game}}</li>
      </ul>
      <nuxt-link to="/inspire">to inspire</nuxt-link>
    </v-flex>
  </v-layout>
</template>
<script>
import sessions from "~/apollo/queries/sessions";
export default {  
  created(){    
    console.log('created')
  },
  apollo: {    
    sessions: {
      prefetch: true,
      query: sessions
    }
  }
};
</script>