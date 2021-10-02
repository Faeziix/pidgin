var p = require("pidgin").createClient();

const cb = (i, b) => {
  console.log(i, b);
};

p.PurpleBlistGetBuddies(cb);
