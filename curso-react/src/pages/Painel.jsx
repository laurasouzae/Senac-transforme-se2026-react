import {useState} from 'react'
import { Link } from 'react-router'
function Painel() {
    const [modal,setModal] = useState(false)

    return (


        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/2 mx-auto py-4 shadow-lg px-4">
            <p id="bemVindo"></p>

        { modal &&(
            <div  className="fixed flex top-0 right-0 bottom-0 left-0 items-center justify-center bg-black/50 z-50">

                <div className="relative max-w-md w-full p-5 bg-about rounded-lg shadow-md flex flex-col bg-with">

                    <a onClick={()=> setModal(false)}  className="bg-red-500 absolute top-0 right-0  rounded-full cursor-pointer">X</a>
                    <h2>Cadastrar novo usuário</h2>
                    <p>Preencha as informações abaixo:</p>

                    <form className="flex flex-col">
                        Nome:
                        <input id="iName" type="text" placeholder="Digite seu nome completo" />
                        Email:
                        <input id="iEmail" type="email" placeholder="Digite seu melhor email" />
                        Senha:
                        <input id="iPass" type="password" placeholder="Letra maiuscula e números" />
                        Data de nascimento:
                        <input id="iBirth" type="date" />

                        <a  className="mt-5 bg-primary text-white text-center rounded-md py-2"> Salvar</a>




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

            <a onClick={()=> setModal(true)} className="cursor-pointer rounded-full bg-primary text-white px-4 py-3 fixed bottom-0 right-0 "> + </a>
            




            <script src="user.js"></script>
            <script src="painel.js"></script>




        </div>

    )

}
export default Painel; 