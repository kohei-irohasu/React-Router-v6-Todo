import { Form, useActionData, useLoaderData } from "react-router-dom";

export async function loader() {
    const res = await fetch('http://localhost:3001/todos');
    const todos = await res.json();
    return { todos };
}

export async function action({ request }) {
    const data = Object.fromEntries(await request.formData());
    const res = await fetch('http://localhost:3001/todos/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const todo = await res.json();

    return { todo };
}

const Todo = () => {
    const { todos } = useLoaderData();
    const actionData = useActionData();
    console.log(actionData);
    return (
        <>
          <h2>Todo</h2>
          <Form method="POST">
            <input name="title" placeholder="title" />
            <br />
            <button type="submit">Submit</button>
          </Form>
          <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </>
    );

}

export default Todo;