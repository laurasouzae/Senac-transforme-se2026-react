import {useState} from 'react'
import {Link} from 'react-router'
function Auth (){
    const [email,setEmail] = useState("")   
    const [password,setPass] = useState("")   
    const [user,setUser] = useState("")

        function handleLogin(){
            const users=JSON.parse(localStorage.getItem('users'))
            let user= users.find(u=>{
                return u.email == email
            })
            if (!user){
                // criar useState de mensagem
                setMensagem ("Usuário não encontrado")
            }

            if(user.pass=pass){
                 //manda para a tela do painel

                 localStorage.setItem('Logado',JSON.stringify(user));
                    setUser({})

                 }else{
                    

                    setMensagem ("Senha incorreta")
                    
                     //usando a mesma useState de mensagem
                 }
        }

    return(
    
        
        <div className="mt-16 bg-primary flex flex-col text-white rounded-lg text-center w-1/3 mx-auto py-4 shadow-lg px-4">
            
           
            
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
             <a onClick={handleLogin} className="mr-2 py-2 py-2 px-4 text-white hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" >Entrar</a></div>
            
        </form>
         
        </div>
      
    )

}
export default Auth; 