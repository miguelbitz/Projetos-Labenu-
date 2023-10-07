import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Card from "./components/Card";

export default function App() {
  const [users, setUsers] = useState([]);

  console.log(users)

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider>
      {users.map((user) => {
        return (
          <Card
            key={user.id} 
            name={user.name}/>
        )
      })}
    </ChakraProvider>
  );
}
