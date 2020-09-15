// 使用 Mock
import Mock from 'mockjs'
import TodoList from "./TodoList";
import IconList from "./IconList";

Mock.mock('/todoList','get',TodoList) //tolist列表接口
Mock.mock('/IconList','get',IconList) //主页iconlist接口