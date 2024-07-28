import { useTodo } from "../hooks/useTodo";

const TodoTitle = ({title,as}) =>{
  if(as == "h1") return <h1>{title}</h1>;
  if(as == "h2") return <h2>{title}</h2>;
  return <p>{title}</p>
}

const TodoItem = ({todo}) =>{
  return(
    <li>
      {todo.content}
      <button>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
      <button>削除</button>
    </li>
  );
};

const TodoList = ({todoList}) =>{
  return (
    <ul>
      {todoList.map((todo) =>(
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default function App(){
  
  const { todoList } = useTodo();

  console.log("TODOリスト：",todoList);

  const inCompletedList = todoList.filter((todo) =>{
    return !todo.done;
  });

  console.log("未完了TODOリスト：",inCompletedList);

  const CompletedList = todoList.filter((todo) =>{
    return todo.done;
  });

  return(
      <>
        <TodoTitle title="TODO進捗管理" as="h1" />
        <textarea />
          
          <button>+ TODOを追加</button>

          <TodoTitle title="未完了TODOリスト" as="h2" />
          <TodoList todoList={inCompletedList} />
          <TodoTitle title="完了TODOリスト" as="h2" />
          <TodoList todoList={CompletedList} />

      </>
  );
};