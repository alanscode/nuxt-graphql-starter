<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul>
        <li v-for="session in sessions" :key="session.id">{{session.limit + ' ' + session.game}}</li>
      </ul>
      <nuxt-link to="/">to home</nuxt-link>
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