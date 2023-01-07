import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login"
import { NotFound } from "./views/NotFound"
import { UserList } from "./views/UserList"
import { UserShow } from "./views/UserShow";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:user_id" element={<UserShow />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

