const { roles } = require("./permissions");

export const guest = {
  name: "Guest",
  role: [roles.GUEST],
};

export const admin = {
  name: "Admin",
  role: [roles.ADMIN],
};

export const user = {
  name: "User",
  role: [roles.USER],
};
