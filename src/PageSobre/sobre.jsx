import './sobre.'

const sobre = () => {

return(
<>
  <title>Saudazen</title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>


  


  <div class="tes">
    <div class="faixa"></div>
    <a href="pagmod.html"><img style="width: 37%; height: auto;" src="imagem/image 5.png"/></a>
    <nav>
      <ul>
        <li><a href=""></a>DICAS DIÁRIAS</li>
        <li><a href="deaz.html"></a>SAÚDE A-Z</li>
      </ul>
    </nav>



    <button style="background-color: rgb(28, 28, 122); width: 150px; margin-left: 25px; margin-right: -35px; margin-left: 5%;"
      class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"><a class="icon-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 1 1" aria-hidden="true">
          <img style="width: 20px; margin-left: -25px" src="imagem/lupa 2.png"/>
        </svg>
        Pesquisar
      </a></button>

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel">
      <div style="background-color: rgb(81, 187, 187);" class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Pesquise sobre aqui</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <nav class="navbar bg-body-tertiary">
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-light" type="submit">Search</button>
        </form>
      </nav>
    </div>
    <button style="margin-left: auto;" class="con"><a href="loginpage.html"> Criar conta/entrar</a></button>
    <div class="faixa1"></div>
  </div><br/>
<div class="sob">

 
</div>
<div class="sob"/>
    <h1 style="">Sobre nós</h1>
    <img style="height: auto; width: auto;" src="szLOGO.png"/>
    <h2 style="font-size: x-large;"/>
Somos um grupo de estudantes do ensino médio apaixonados por aprender e por fazer a <br>
diferença. Este site foi criado como parte de um projeto escolar com o objetivo de promover <br/>
informações confiáveis e acessíveis  sobre saúde <br/><br/>
Nosso objetivo é incentivar hábitos saudáveis e conscientizar sobre a importância do cuidado <br/>
com o corpo e a mente, especialmente entre jovens como nós. Todo o conteúdo aqui presente foi <br/>
desenvolvido com base em pesquisas e fontes confiáveis, sempre com o acompanhamento e <br/>
orientação de nossos professores. <br/><br>
Sabemos que não somos especialistas, mas acreditamos no poder da informação e da educação para transformar vidas. <br/>
Obrigado por visitar nosso site e fazer parte desse projeto com a gente!<h2/></br>
<div/>
  </br>
  

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
    crossorigin="anonymous"></script>

</>

);

};

export default sobre;