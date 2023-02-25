import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [isLoading,setIsLoading] = useState(false)
  const [users,setUsers] = useState([])
  const [filteredUsers,setFilteredUsers] = useState(users)
  const [inputValue,setInputValue] = useState("")

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data)
        setIsLoading(false)
      }catch(err){
        setIsLoading(false)
        console.log(`something went wrong ${err.message}`);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    let filteredUser = users.filter((user) =>
      user.name.toLowerCase().includes(inputValue)
    );
    setFilteredUsers(filteredUser)

  }, [users,inputValue]);

  const handleInputValue = (e) => {
     setInputValue(e.target.value.toLowerCase())
  };

  return (
    <div>
      <div style={{width:"30%",margin:"2em auto"}}>
        <input
        style={{width:"100%",padding:".5em"}}
          type="text"
          placeholder="search user"
          onChange={handleInputValue}
        />
      </div>
      <Card users={users} isLoading={isLoading} filteredUsers={filteredUsers} />
    </div>
  );
}

export default App;
