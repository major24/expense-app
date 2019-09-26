const sampleData = [
    { userId: 'user1', password: '11', firstName: 'Major', lastName: 'Nalliah', costCentre: '1022', managerId: 'user2' },
    { userId: 'user2', password: '11', firstName: 'Steve', lastName: 'Smith', costCentre: '1022', managerId: 'user30' }
];

const mockLoginService = {
  authenticateUser: function (userId, password) {
    let user = sampleData.filter(u => u.userId === userId)[0];
    if (user && user.password === password) {
      return true;
    }
    return false;
  },
  getUser: function (userId) {
    let user = sampleData.filter(u => u.userId === userId)[0];
    user.password = '';
    return user;
  },
  setUserInSessionStorage(user) {
    this.saveToSessionStorage(user);
  },
  saveToSessionStorage(user) {
    if (typeof(Storage) !== "undefined") {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      console.log('Error: your browser does not support Web Storage...');
    }
  }
}

module.exports = mockLoginService;
