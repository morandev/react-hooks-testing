import { useContext } from "react";
import { UserContext } from "../context/userContext/UserContext";

const About = () => {
     const { user } = useContext(UserContext)
     
     return (
          <>
               <h1>About Page!</h1>
               <h2>{user?.nombre}</h2>
               <hr />
          </>
     );
};

export default About;
