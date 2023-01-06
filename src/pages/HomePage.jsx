import { useContext } from "react";
import { UserContext } from "../context/userContext/UserContext";

const HomePage = () => {
     const {user} = useContext(UserContext)
     return (
          <>
               <h1>Home Page!</h1>
               <hr />
               <pre>
                    {
                         JSON.stringify(user, null, 3)
                    }
               </pre>
          </>
     );
};

export default HomePage;
