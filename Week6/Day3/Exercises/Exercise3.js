const users = { user1: 18273, user2: 92833, user3: 90315 };

console.log(Object.entries(users));

new_users = []

Object.entries(users).forEach(([key, value]) => {
    let new_value = value * 2;
    new_users.push([key, new_value]);
  });

console.log(new_users);