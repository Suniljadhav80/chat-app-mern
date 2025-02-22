import Logout from "./logout/Logout"
import Search from "./search/Search"
import UserList from "./usersList/UserList"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r-2 w-1/3 border-gray-400 px-0 py-0 justify-between">
        <Search />
        <UserList />
        <Logout />
    </div>
  )
}

export default Sidebar;