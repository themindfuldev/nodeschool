function loadUsers(userIds, load, done) {
	var users = [];
	var usersLoaded = 0;
	userIds.forEach(function(userId, index) {
		load(userId, function(user) {
			users[index] = user;
			if (++usersLoaded === userIds.length) {
				done(users);
			}
		});
	});
	return users;
}

module.exports = loadUsers;