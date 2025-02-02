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
    if (keyword?.length) {
      filter = sql`${filter} and (lower(name) like ${
        "%" + keyword + "%"
      } or lower(email) like ${"%" + keyword + "%"})`;
    }
    return sql`select * from users ${filter}  order by created_at DESC`;
  },
  emailUnique: async (email, id = 0) => {
    const ignore = id > 0 ? sql`and id != ${id}` : sql``;
    const result =
      await sql`select id from users where email=${email} ${ignore}`;

    return result.length ? false : true;
    // neu email ton tai tra ve true nguoc lai false
  },
  create: (data = {}) => {
    const { name, email, status } = data;
    return sql`insert into users(name,email,status) values(${name},${email},${status})`;
  },
  find: (id) => {
    return sql`select * from users where id = ${id}`;
  },
  update: ({ name, email, status }, id) => {
    return sql`update users set name=${name}, email=${email}, status=${status} where id = ${id} `;
  },
  delete: (id) => {
    return sql`delete from users where id = ${id}`;
  },
};
