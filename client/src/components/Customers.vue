<template>
  <div class="hello">
    <ul>
      <li v-for="customer in sessions" :key="customer.id">{{customer.id}}</li>
    </ul>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  
  apollo: {
    sessions: {
        prefetch: true,
        query: gql`
        {
          sessions {
            id
            game
            limit
            location
            date
            buyin
            cashout
          }
        }

        `
      
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: list-item;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
