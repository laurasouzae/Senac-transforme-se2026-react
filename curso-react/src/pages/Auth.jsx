import {useState} from 'react'
import {Link} from 'react-router'
function Auth (){
    const [email,setEmail] = useState("")   
    const [password,setPass] = useState("")   


    return(
    
        
        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/2 mx-auto py-4 shadow-lg px-4">
            
           
            
            <h2 className="text-white">Login</h2>
            
         <form className="flex h-full flex-col  gap-[20]">
           <span className="text-left "> Email:</span> 
            <input
            className="text-black"
                type="email"
                value={email}
                placeholder="Digite o seu email de cadastro"
                onChange={(e) => setEmail(e.target.value)}
                />
            {email}
            
            <span className="text-left ">Senha:</span> 
            <input
            className="text-black"
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={(p) => setPass(p.target.value)}
                />
            {password}
            
            <div className="mx-auto text-left my-4"><Link className="mr-2 py-2 py-2 px-4 text-white hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" to="/">Voltar</Link>
             <a id="formLogin" className="mr-2 py-2 py-2 px-4 text-white hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" >Entrar</a></div>
            
        </form>
         
        </div>
      
    )

}
export default Auth; 