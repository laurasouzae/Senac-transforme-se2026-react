import {useState} from 'react'
import { Link } from 'react-router'
function Painel() {
    const [modal,setModal] = useState(false) //bollean
    const [users,setUsers] = useState([]) //vetor
    const [user,setUser] = useState({}) //objeto



    function handleRegister (){
        const newUsers=[...users,user]
        setUsers(newUsers);
        localStorage.setItem('users',JSON.stringify(newUsers));
        setUser({})
        setModal(false);
    }
    return (


        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/2 mx-auto py-4 shadow-lg px-4">
            <p id="bemVindo"></p>

        { modal &&(
            <div  className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                <div className="relative max-w-md w-full text-black p-5 bg-about rounded-lg shadow-md flex flex-col bg-with">

                    <a onClick={()=> setModal(false)}  className="text-black hover:text-white px-2 hover:bg-red hover:shadow-inner absolute top-0 right-0  rounded cursor-pointer">X</a>
                    <h2>Cadastrar novo usuário</h2>
                    <p>Preencha as informações abaixo:</p>
                    
                  
                    <form className="flex flex-col text-black text-left">
                        Nome:
                      <input onChange={(e) => setUser({...user, nome:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iName" type="text" placeholder="Digite seu nome completo" />
                        Email:
                        <input onChange={(e) => setUser({...user, email:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iEmail" type="email" placeholder="Digite seu melhor email" />
                        Senha:
                        <input onChange={(e) => setUser({...user, senha:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200 " id="iPass" type="password" placeholder="Letra maiuscula e números" />
                        Data de nascimento:
                        <input onChange={(e) => setUser({...user, nascimento:e.target.value})} className="rounded bg-gray-100 hover:bg-gray-200" id="iBirth" type="date" />

                        <a onClick={handleRegister} className="rounded cursor-pointer mt-5 bg-primary text-white text-center rounded-md py-2"> Salvar</a>

            


                    </form>
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

                </tbody>
            </table>

            <a onClick={()=> setModal(true)} className="hover:bg-green-700 font-bold text-xl cursor-pointer rounded-full bg-primary text-white px-4 py-1 fixed bottom-0 right-0 "> + </a>
            




            <script src="user.js"></script>
            <script src="painel.js"></script>




        </div>

    )

}
export default Painel; 