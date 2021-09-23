let state ={
  posts:[
      { id:'1', text: 'Hello, i am new student', name: 'тейп', email: 'dj.tape@mail.ru', count: '15' },
      { id:'2', text: 'Hello, i am new student too, dj tape', name: 'голопопик', email: 'yarik@mail.ru', count: '20' },
      { id:'3', text: 'Тестовая запись на отрисовку массивов и елементов вроде работает', name: 'димка митя', email: 'дима@mail.ru', count: '99 345' },
      // { id:'4', text: 'Прокидывание пропсов через роутер, ААААААААА. я крутой ура', name: 'митя', email: 'митя@mail.ru', count: '134 675' }
  ]
}

export let div = '<div> </div>'

export let jopa = 'Оsdasdasd'

export let addPost = (postMessage, postEmail, postName) => {
    debugger;
    let newPost ={
      id: 5,
      text: postMessage,
      name: postName,
      email: postEmail,
      count: 0
    }
    state.posts.push(newPost)
}

export default state