import { useContext, useRef } from "react";
import { UserContext } from "../context/userContext/UserContext";

const LoginPage = () => {
     const { user, setUser } = useContext(UserContext);
     
     const celdaNombre = useRef()
     const celdaApellido = useRef()
     const celdaRol = useRef()

     const handleGuardar = () => {
          setUser(prv => ({
               ...prv,
               nombre: celdaNombre.current.innerHTML,
               apellido: celdaApellido.current.innerHTML,
               rol: celdaRol.current.innerHTML,
          }))
     }
     
     return (
          <>
               <h1>Login Page!</h1>
               <hr />
               <table className="table table-dark table-bordered">
                    <thead>
                         <tr>
                              <th scope="col">Nombre</th>
                              <th scope="col">Apellido</th>
                              <th scope="col">Rol</th>
                              <th scope="col">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td ref={celdaNombre} contentEditable>{user?.nombre}</td>
                              <td ref={celdaApellido} contentEditable>{user?.apellido}</td>
                              <td ref={celdaRol} contentEditable>{user?.rol}</td>
                              <td>
                                   <button
                                        className="btn btn-primary mx-1"
                                        onClick={handleGuardar}
                                   >
                                        SAVE
                                   </button>
                              </td>
                         </tr>
                    </tbody>
               </table>
          </>
     );
};

export default LoginPage;
