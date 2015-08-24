import mockData from '../data/mockData';

class InboxApi {
  static getMessages() {
    return new Promise((resolve, reject) =>
      setTimeout(function () {
        resolve(mockData.getMessages());
      }, Math.random() * 1000 + 200)
    )
  }

  static getMessageItem(id) {

    return new Promise((resolve, reject) =>
      setTimeout(function () {
        resolve(mockData.getMessageItem(id));
      }, Math.random() * 1000 + 200)
    )


  }
}

export default InboxApi;

