import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie"

import { TodoList } from "components/pages/TodoList"
import { TodoForm } from "components/pages/TodoForm"

import { getTodos } from "../../lib/api/todos"
import { Todo} from "../../interfaces/index"

const Index: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleGetTodos = async () => {
    try {
      const res = await getTodos()
      console.log(res)

      if (res?.status === 200) {
        setTodos(res.data.todos)
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  return (
    <>
    <TodoForm todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default Index