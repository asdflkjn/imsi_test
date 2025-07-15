// 연습
/*
    렌더링 성능 향상
    

*/

import React, { useCallback, useMemo, useState } from 'react';
import '../App.css';

const App = () => {

    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addTodo = useCallback( (todo) => {
        const newTodoList = [...todoList, {id: new Date().getTime(), todo: todo}];
        setTodoList( newTodoList );
        setTodo('')
    }, [todo, todoList] );

    const getTodoListCount = todoList => {
        return todoList.length;
    }
    
    const resultCount = useMemo(()=>getTodoListCount(todoList), [todoList] );

    // const getTodoListCount = useMemo( () => {
    //     return todoList.length;
    // }, [todoList] );

    const deleteTodo = useCallback( id=>{ // 인자가 하나면 () 안 써도 됨
        let idx = todoList.findIndex( item => item.id === id )

        let newTodoList = [...todoList]
        newTodoList.splice(idx, 1); // idx부터 1개 삭제

        setTodoList(newTodoList);
    }, [todoList] );

    return(
        <div className="App">
            <input type='text' value={todo} onChange={(evt)=>{setTodo(evt.target.value)}}/>
            <button onClick={()=>addTodo(todo)}>할일 추가</button>
            <hr/>
                <div className='App-subtitle'>남은 할일의 갯수2: {resultCount}</div>
            <hr/>

            {/* 여기에 할일 목록 출력 */}
            <ul>
                {
                    todoList.map( (item) => 
                        <li key={item.id}>
                            <span>{item.todo}</span>
                            <button onClick={()=>deleteTodo(item.id) }>삭제</button>
                        </li>
                    )
                }
            </ul>    
        </div>
    )

}

export default App;