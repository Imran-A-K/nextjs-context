const { roles } = require("./permissions");

export const guest = {
  id: crypto.randomUUID(),
  name: "Guest",
  role: [roles.GUEST],
};

export const admin = {
  id: crypto.randomUUID(),
  name: "Admin",
  role: [roles.ADMIN],
};

export const user = {
  id: crypto.randomUUID(),
  name: "User",
  role: [roles.USER],
};

export const systemUsers = [guest, user, admin];
