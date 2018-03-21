<template>
  <v-layout>
    <v-flex text-xs-center>
      <ul>
        <li v-for="session in sessions" :key="session.id">{{session.limit + ' ' + session.game}}</li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import sessions from "~/apollo/queries/sessions";
export default {  
  apollo: {    
    sessions: {
      prefetch: true,
      query: sessions
    }
  }
};
</script>