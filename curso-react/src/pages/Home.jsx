import { Link } from 'react-router'
import { Template } from '../components/Template';

function Home() {
  return (
    <>
      <Template>
        <main className="p-8">


          <div>

            <main>
              <section >
                <div className="max-w-lg mx-auto py-6">
                  <h1>Duolibras</h1>
                  <div >
                    <p>Bem vindo ao <b>Duolibras</b>, aqui você irá aprender conteúdos práticos de forma fácil e
                      divertida
                      de acordo com a sua idade.
                    </p>
                    <p>Este site é pensado para crianças do fundamental 1 e 2, mas caso você seja um adulto, fique
                      tranquilo!
                      Tenho certeza de que você também irá aprender bastante por aqui
                    </p>
                    <p>
                      Vamos aproveitar o tempo de tela que os jovens tem no seu cotidiano, para incentivar o uso da
                      tela
                      por
                      uma boa razão.
                    </p>
                    <p>Deenvolido para trazer inclusão para os mudos e mais acessibilidade no dia a dia.</p>
                  </div>


                </div>

              </section>
              <section >
                <div className="max-w-lg mx-auto py-4 ">
                  <h2> Quais são os valores para ter o Duolibras? </h2>
                  <p> As parcerias são feitas diretamente com as escolas, empresas e governos da sua cidade. Então se seu
                    filho já tem uma conta criada pela escolo, fique tranquilo, não será cobrado nenhum valor adicional
                    á você</p>
                </div>

              </section>
              <section >
                <div className="max-w-lg mx-auto py-4 ">
                  <div><h2> DuoLibras </h2></div>
                  <p>Aprenda libras de maneira fácil, rápida, eficaz e com custo benefício!</p>
                  <p>Qualquer duvída ou reclamação, entre em contato via <a href="mailto:equipe@duolibras.com" className="text-primary"><b>e-mail
                    equipe@duolibras.com</b></a></p>
                </div>

              </section>


            </main>
            <footer>

            </footer>

          </div>
          

          

        </main>
      </Template>
    </>

    )
}

export default Home;