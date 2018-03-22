<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <nav class="panel">
            <p class="panel-heading">
              Cashout History
            </p>
            <p class="panel-tabs">
              <a class="is-active">all</a>
  
              <a>this month</a>
              <a>this week</a>
              <a>today</a>
            </p>
          </nav>
          <section class="hero is-success">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  Up $1000
                </h1>
                <h2 class="subtitle">
                  You have a 80% win rate!
                </h2>
              </div>
            </div>
          </section>
          <b-table :data="sessions" :columns="columns"></b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { sessions } from "@/apollo/queries";
import { gql } from "apollo-boost";

export default {
  data() {
    return {
      sessions: [],
      columns: [
        {
          field: "limit",
          label: "Limit",
          centered: true
        },
        {
          field: "game",
          label: "Game",
          centered: true
        },
        {
          field: "location",
          label: "Location",
          centered: true
        },
        {
          field: "buyin",
          label: "Buy-in",
          centered: true
        },
        {
          field: "cashout",
          label: "Cash-out",
          centered: true
        }
      ]
    };
  },
  apollo: {
    sessions: {      
      query: gql(sessions)
    }
  }
};
</script>