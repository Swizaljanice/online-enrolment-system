//services/queueService.js
class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    peek() {
      return this.queue[0];
    }
  }
  
  module.exports = new Queue();
  