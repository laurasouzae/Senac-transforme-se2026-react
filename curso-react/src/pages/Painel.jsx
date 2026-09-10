import {useEffect, useState} from 'react'
import { Link } from 'react-router'
function Painel() {
    const [modal,setModal] = useState(false) //bollean
    const [users,setUsers] = useState([]) //vetor
    const [user,setUser] = useState({}) //objeto
    const [logado, setLogado]= useState ()
    const [isEdit,setIsEdit]= useState (false)
    const [index,setIndex]= useState (-1)


    useEffect(
        ()=>{
            const logado = JSON.parse(localStorage.getItem('logado'))
            setLogado(logado)
        },
        []
    );

    useEffect(
        ()=>{
            const  usersTemp = JSON.parse(localStorage.getItem('users'))
            if(usersTemp) setUsers(usersTemp)
        },                                    
        []
    ); 

    function updateUser (indice){
        setModal (true)
        setUser(users[indice])
        setIndex(indice)
    }

    function handleRegister (){
        let newUsers
        if(index != -1){
            newUsers=[...users]
            newUsers[index] = user;
        }else{
            newUsers=[...users,user]
        }
        
        setUsers(newUsers);
        localStorage.setItem('users',JSON.stringify(newUsers));
        setUser({})
        setModal(false);
        setIndex(-1)
        setIsEdit(false)
    }
    return (


        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/2 mx-auto py-4 shadow-lg px-4">
            <h3><b>Bem vindo, {logado?.nome}</b> </h3> 
        { modal &&(

            <div  className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                <div className="relative max-w-md w-full text-black p-5 bg-about rounded-lg shadow-md flex flex-col bg-with">

                    <a onClick={()=> {setModal(false); setIsEdit(false); setUser({}); setIndex(-1)}} 
                     className="text-black hover:text-white px-2 hover:bg-red hover:shadow-inner absolute top-0 right-0  rounded cursor-pointer">X</a>
                    <h2>Cadastrar novo usuário</h2>
                    <p>Preencha as informações abaixo:</p>
                    
                    {isEdit ?(
                    <form className="flex flex-col text-black text-left">
                        Nome:
                      <input value={user.nome} onChange={(e) => setUser({...user, nome:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iName" type="text" placeholder="Digite seu nome completo" />
                        Email:
                        <input value={user.email} onChange={(e) => setUser({...user, email:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iEmail" type="email" placeholder="Digite seu melhor email" />
                        Senha:
                        <input onChange={(e) => setUser({...user, senha:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200 " id="iPass" type="password" placeholder="Letra maiuscula e números" />
                        Data de nascimento:
                        <input value={user.nascimento} onChange={(e) => setUser({...user, nascimento:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iBirth" type="date" />
                        
                        { index != -1 &&(
                        <a onClick={()=> setIsEdit(false)} className="rounded cursor-pointer mt-5 bg-red-500 text-white text-center rounded-md py-2"> Cancelar</a>
                    )    
                    }
                        <a onClick={handleRegister} className="rounded cursor-pointer mt-5 bg-primary text-white text-center rounded-md py-2"> Salvar</a>
                     
            


                    </form>): // ":" = else
                    (
                        <>
                            <p><b>Nome:</b> {user.nome}</p>
                            <p><b>Email:</b> {user.email}</p>
                            <p><b>Data de Nascimento:</b> {user.nascimento}</p>
                            <a onClick={()=> setIsEdit(true)} className="rounded cursor-pointer mt-5 bg-yellow-500 text-black text-center rounded-md py-2"> Editar</a>
                        </>

                    )
                    }

                </div>
            </div>
        )}

            <table>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ação</th>
                </thead>
                <tbody id="listUsers" className="font-secondary">
                {users.map( (u,i) =>(
                    <tr>
                        <td>{u.nome}</td>
                        <td>{u.email}</td>
                        <td>
                            <a className ='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-green-500 'onClick={()=> updateUser (i)} >V</a>
                            <a className ='cursor-pointer px-3 mx-4 houver:shadow shadow-md text-white rounded-full bg-red-500'>X</a>
                        </td>
                    </tr>
                ))}

                </tbody>
            </table>

            <a onClick={()=> {setModal(true); setIsEdit(true)}} className="hover:bg-green-700 font-bold text-xl cursor-pointer rounded-full bg-primary text-white px-4 py-1 fixed bottom-0 right-0 "> + </a>
            




            <script src="user.js"></script>
            <script src="painel.js"></script>




        </div>

    )

}
export default Painel; 