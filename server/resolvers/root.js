let Session = require("../models/Session");
let sessions = [];

const root = {
  Query: {
    sessions() {
      console.log("sessions query made");
      return sessions;
    }
  },
  Counter: {
    countStr: counter => `Current count: ${counter.count}`
  },
  Subscription: {
    counter: {
      subscribe: (parent, args, { pubsub }) => {
        const channel = "1"
        let count = 0;
        setInterval(
          () => pubsub.publish(channel, { counter: { count: count++ } }),
          (1000)
        );
        return pubsub.asyncIterator(channel);
      }
    }
  },
  Mutation: {
    newSession(root, { session }) {
      session = new Session(session);
      session.id = Math.random();
      sessions.push(session);
      console.log(sessions);
      return session;
    }
  }
};

module.exports = root;
