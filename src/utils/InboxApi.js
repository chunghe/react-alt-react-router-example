import mockData from '../data/mockData';

class InboxApi {
  static getMessages() {
    return new Promise((resolve, reject) =>
      setTimeout(function () {
        resolve(mockData);
      }, Math.random() * 1000 + 200)
    )
  }

  static getMessageItem(id) {

    return new Promise((resolve, reject) =>
      setTimeout(function () {
        resolve('hello world' + Math.random());
      }, Math.random() * 1000 + 200)
    )


  }
}

export default InboxApi;

