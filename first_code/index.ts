import axios from 'axios'; // importa axios do node_modules

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo { // define as propriedades de um objeto do tipo Todo/ Ajuda nos catch erros do TS
    id: number;
    title: string;
    completed: boolean
}

axios.get(url).then(response => { // Axios é assíncrono
    const todo = response.data as Todo; // define o objeto de resposta como do tipo Todo
    const id = todo.id
    const title = todo.title
    const finished = todo.completed

    printTodo(id,title,finished);
    
})

// o arquivo .ts deve ser compliado usando o tsc e se tornando um arquivo .js modificado

const printTodo = (id: number, title: string, finished: boolean) => {
    console.log(`
    ID: ${id} 
    Title: ${title} 
    Finished: ${finished}`)
}
