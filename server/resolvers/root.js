let Session = require("../models/Session");
let sessions = [];

const root = {
  Query: {
    sessions() {
      console.log("sessions query made");
      return sessions;
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
