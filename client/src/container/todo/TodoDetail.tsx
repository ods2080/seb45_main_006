import { useParams } from "react-router-dom";
import { useGetDetailTodo, useGetTodoOwnerUser, useGetAllTodosOfUser } from "@api/todo/hook";

import Text from "@component/common/Text";
import TodoUserCard from "@component/todo/TodoUserCard";
import ReadOrUpdateTodo from "@component/todo/ReadOrUpdateTodo";
import { TodoListTitle, TodoItem } from "@component/todo/TodoComponents";

function TodoDetail() {
    const { todoId } = useParams();

    const { data: singleTodo } = useGetDetailTodo({ todoId: Number.parseInt(todoId || "-1") });
    const { data: ownerUser } = useGetTodoOwnerUser({ userId: singleTodo?.userId });
    const { data: allTodosOfUser } = useGetAllTodosOfUser({ userId: singleTodo?.userId });
    const todos = allTodosOfUser?.todos;

    return (
        <div className="p-30">
            <div className="mb-32 flex">
                <TodoUserCard ownerUser={ownerUser} />
                <ReadOrUpdateTodo singleTodo={singleTodo} />
            </div>
            <Text type="Label" text={`그 외 ${ownerUser?.lastName}이/가 등록한 할일들`} />
            <ul className="mb-48 mt-12 w-fit">
                <TodoListTitle />
                {Array.isArray(todos) &&
                    singleTodo?.id &&
                    todos
                        .filter((v) => v.id !== singleTodo.id)
                        .map((v) => (
                            <TodoItem key={v.id} id={v.id} userId={v.userId} todo={v.todo} completed={v.completed} />
                        ))}
            </ul>
        </div>
    );
}

export default TodoDetail;
