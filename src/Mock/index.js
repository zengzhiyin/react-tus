// 使用 Mock
import Mock from 'mockjs'
import TodoList from "./TodoList";
import IconList from "./IconList";

Mock.mock('/todoList','get',TodoList)
Mock.mock('/IconList','get',IconList)