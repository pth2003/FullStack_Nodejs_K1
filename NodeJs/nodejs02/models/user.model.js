// tu duy model
// moi model tuong ung voi 1 table
// trong 1 controller co the co nhieu model

const sql = require("../utils/db");
module.exports = {
  all: (status, keyword) => {
    let filter = sql`where name is not null`;
    if (status !== undefined) {
      filter = sql`${filter} and status = ${status}`;
    }
    if (keyword.length) {
      filter = sql`${filter} and (lower(name) like ${
        "%" + keyword + "%"
      } or lower(email) like ${"%" + keyword + "%"})`;
    }
    return sql`select * from users ${filter}  order by created_at DESC`;
  },
};
