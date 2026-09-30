import { Link } from 'react-router'

export function Template ({children}){
    return(
        <>
        <nav className="flex items-center text-with py-4 px-16 bg-primary absolute fixed top-0 w-full shadow-lg">
        <a className="mr-2 p-2 p-2 hover:bg-secondary" href="#about">Sobre</a>
        <a className="mr-2 p-2 p-2 hover:bg-secondary" href="#prices">Preços</a>
        <a className="mr-2 p-2 p-2 hover:bg-secondary" href="#features">Benefícios</a>
        <Link className="mr-2 py-2 py-2 px-4 hover:bg-secondary hover:shadow-inner rounded ml-auto shadow-md" to="/auth">Acessar</Link>

      </nav>
      {children}
      <footer>
            site criado pela Laura
      </footer>
        </>
    )
}