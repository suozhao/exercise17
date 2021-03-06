/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:38:36
 */

class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(observer) {
    // todo add observer to list
    return this.observerList.push( observer );
  }
  remove(observer) {
    // todo remove observer from list
    this.observerList.splice( observer , 1 );
  }
  count() {
    // return observer list size
    return this.observerList.length;
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add( observer );
  }
  removeObserver(observer) {
    // todo remove observer
    let l = this.observers.count();
    for (var i = l - 1; i >= 0; i--) {
      if(this.observers.observerList[i] === observer){
        this.observers.remove( i );
      }
    }
    
  }
  notify(context) {
    // todo notify
    var observerCount = this.observers.count();
    for(var i=0; i < observerCount; i++){
      this.observers.observerList[i].update( context );
    }
  }
}

module.exports = { Subject };