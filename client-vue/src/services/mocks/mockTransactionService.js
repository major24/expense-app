const sampleData = [
  { 'id': 900, 'userId': 'user1', 'transType': 'DR', 'description': 'M-Sheraton Hotel', 'amount': '1450.99', 'tax': '325.78', 'transDate': '2019-09-10', 'expenseType': 'Travel' },
  { 'id': 901, 'userId': 'user1', 'transType': 'DR', 'description': 'M-McDonald Restaurant', 'amount': '36.45', 'tax': '5.00', 'transDate': '2019-09-10', 'expenseType': 'Food and Bev' },
  { 'id': 2011, 'userId': 'user2', 'transType': 'DR', 'description': 'M-Air Canada', 'amount': '1536.45', 'tax': '157.00', 'transDate': '2019-09-10', 'expenseType': 'Travel' }
];

export default {
  getAll: async () => {
    const resp = {
      data: sampleData
    };
    return resp;
  },
  getTransactionsByUserId: async (userId) => {
    let trans = sampleData.filter(function (t) {
      return t.userId === userId;
    });
    const resp = {
      data: trans
    };
    return resp;
  },
  save: async (data) => {
    // create two sets of records.
    // set1: POST: newly added expenses
    // set2: PUT: submitted existing trans. Update all records with 'Submitted' status
    //    as well set the isPersonal flag..
    const newRecords = data.filter(t =>  t.isOutOfPocket);
    const updates = data.filter(t =>  !t.isOutOfPocket);
    const resp = {
      data: {
        status: 201
      }
    };
    return resp;
  }
}
