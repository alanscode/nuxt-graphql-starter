<template>
  <div class="hello">
    <h1 v-for="message in messages" :key="message.countStr">{{ message.countStr }}</h1>
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  name: "HelloWorld",
  data() {
    return {
      messages: []
    };
  },
  apollo: {
    $subscribe: {
      // When a tag is added
      counter: {
        query: gql`
          subscription {
            counter {
              countStr
            }
          }
        `,      
        // Result hook
        result(data) {
          console.log(this.messages)
          this.messages.push(data.data.counter)
        }
      }
    }
  },
  created() {
    console.log(this.$route);
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
