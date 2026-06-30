
const PagSobre = () => {

return(
<>

  


  


  <div className="tes">
    <div className="faixa"></div>
    <a href="/PagMod"><img style={{ width: '37%', height: 'auto' }} src="/public/image/image 5.png"/></a>
    <nav>
      <ul>
        <li><a href=""></a>DICAS DIÁRIAS</li>
        <li><a href="#"></a>SAÚDE A-Z</li>
      </ul>
    </nav>



    <button style={{ backgroundColor: 'rgb(28, 28, 122)', width: '150px', marginLeft: '25px', marginRight: '-35px', marginLeft: '5%' }}
      className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"><a className="icon-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 1 1" aria-hidden="true">
            <img style={{ width: '20px', marginLeft: '-25px' }} src="imagem/lupa 2.png"/>
          </svg>
          Pesquisar
        </a></button>

    <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div style={{ backgroundColor: 'rgb(81, 187, 187)' }} className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Pesquise sobre aqui</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <nav className="navbar bg-body-tertiary">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-light" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <button style={{ marginLeft: 'auto' }} className="con"><a href="loginpage.html"> Criar conta/entrar</a></button>
    <div className="faixa1"></div>
  </div><br/>
<div className="sob">

 
</div>
<div className="sob"/>
    <h1>Sobre nós</h1>
    <img style={{ height: 'auto', width: 'auto' }} src="szLOGO.png"/>
    <h2 style={{ fontSize: 'x-large' }}>Nossa História</h2>
Somos um grupo de estudantes do ensino médio apaixonados por aprender e por fazer a <br/>
diferença. Este site foi criado como parte de um projeto escolar com o objetivo de promover <br/>
informações confiáveis e acessíveis  sobre saúde <br/><br/>
Nosso objetivo é incentivar hábitos saudáveis e conscientizar sobre a importância do cuidado <br/>
com o corpo e a mente, especialmente entre jovens como nós. Todo o conteúdo aqui presente foi <br/>
desenvolvido com base em pesquisas e fontes confiáveis, sempre com o acompanhamento e <br/>
orientação de nossos professores. <br/><br/>
Sabemos que não somos especialistas, mas acreditamos no poder da informação e da educação para transformar vidas. <br/>
Obrigado por visitar nosso site e fazer parte desse projeto com a gente!<h2/><br/>
<div/>
  <br/>
  

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>

</>

);

};

export default PagSobre;