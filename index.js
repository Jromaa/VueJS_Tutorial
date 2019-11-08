/*** Declarative Rendering ***/
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

/*** Conditionals and Loops ***/

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
//app3.seen = false;

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});
//app4.todos.push({ text: 'New item' });

/*** Handling User Input ***/

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js',
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

/*** Composing with Components ***/

//prop is like a custom attribute, who access in the prop in a template
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }  
});