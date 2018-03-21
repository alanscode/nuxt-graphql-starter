<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <!-- <h1>{{ $route.params.id }}</h1> -->
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { gql } from "apollo-boost";
import subs from "@/apollo/subscriptions";
export default {
  name: "HelloWorld",
  data() {
    return {
      message: ""
    };
  },
  apollo: {
    $subscribe: {
      // When a tag is added
      counter: {
        query: gql(subs.counter2),
        // Result hook
        result(data) {
          this.message = data.data.counter.countStr;
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
