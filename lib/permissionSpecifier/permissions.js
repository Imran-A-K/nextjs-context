export const roles = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
};

export const permissions = {
  VIEW_DASHBOARD: [roles.ADMIN, roles.USER],
  VIEW_ADMIN_PANEL: [roles.ADMIN],
  VIEW_GUEST_PAGE: [roles.GUEST],
};
