import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Tal Yaakov",
    email: "tal@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Niv Yaakov",
    email: "niv@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
