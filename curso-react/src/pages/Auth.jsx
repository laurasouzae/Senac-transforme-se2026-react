import {useState} from 'react'
import {Link} from 'react-router'
function Auth (){
    const [batatinha, setBatatinha]= useState(0);

    function sub(){
        setBatatinha(batatinha - 1)
    }

    return(
    
        
        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/2 mx-auto py-4 shadow-lg px-4">
            
           
            
            <h2 className="text-white">Login</h2>
            <div className="bg-red-400 rounded-full p-2" onClick={sub}>-</div>
            {batatinha} 
            <div className="bg-blue-400 rounded-full p-2" onClick={()=> setBatatinha (batatinha +1 )} >+</div>
         <form className="flex h-full flex-col  gap-[20]">

           <span className="text-left "> Email:</span> <input className="flex  hover:bg-gray hover:shadow-inner " id="iEmailLogin" type="email" placeholder="Digite seu email: ex: jaoa@gmail.com" /> 
            <span className="text-left ">Senha:</span> <input id="iPassLogin" className=" hover:bg-gray hover:shadow-inner" type="password" placeholder="Letra maiúscula e números" />
            
            <div className="mx-auto text-left my-4"><Link className="mr-2 py-2 py-2 px-4 text-white hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" to="/">Voltar</Link>
             <a id="formLogin" className="mr-2 py-2 py-2 px-4 text-white hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" >Entrar</a></div>
            
        </form>
         
        </div>
      
    )

}
export default Auth; 