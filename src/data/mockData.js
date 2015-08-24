var data  = [
  {
    id: 1,
    from: 'David Brown',
    content: 'Hey, we need to...',
    full: 'Hey, we need to be somewhat lorem ipsum.',
    time: '12:30pm'
  },

  {
    id: 2,
    from: 'Mary Sweeney',
    content: 'I followed up w...',
    full: 'I followed up with wo clarifying tweets because someone else took me up on just that. :-)',
    time: '12:10pm'
  },


  {
    id: 3,
    from: 'DeMarcus Jones',
    content: 'check this out ...',
    full: 'Check This Out. You\'ve never seen the creation issue addressed quite this way before!',
    time: '11:2am'
  }
];

var mockData = {
  getMessages: function () {
    return data;
  },

  getMessageItem(id) {
    return data[+id - 1];
  }
}
export default mockData;
