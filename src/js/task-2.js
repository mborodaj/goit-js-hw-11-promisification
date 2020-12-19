
const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = new Promise((res) => {
    res(
      allUsers.map((user) =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
  });

  return updatedUsers;
};

const logger = (updatedUsers) => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
