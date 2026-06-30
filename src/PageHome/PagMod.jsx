import React from "react";
import { Link } from "react-router-dom"
import './pagmod.css'


const PagMod = () => {
    return(
    
<>
 
  <div className="tes">
    <div className="faixa"></div>
    <img style={{ marginLeft: '-5px' }} src="/image/image 5.png" />
    <nav>
      <ul>
        <li><a href="#">MENU</a></li>
        <li><a href="#">DICAS DIÁRIAS</a></li>
        <li><a href="#">SAÚDE A-Z</a></li>
        <li><Link to="/sobre">SOBRE</Link></li>
      </ul>
    </nav>
 
 
 
    <button style={{ backgroundColor: 'rgb(28, 28, 122)', width: '150px', marginLeft: '25px', marginRight: '-35px' }}
      className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"><a className="icon-link" href="#">
          <img style={{ width: '20px', marginLeft: '-25px' }} src="/public/image/lupa 2.png"/>
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
    <button className="con">Fale Conosco</button>
    <button style={{ marginLeft: 'auto' }} className="con"><a href="loginpage.html"> Criar conta/entrar</a></button>
    <div className="faixa1"></div>
  </div><br />
  <center>
  <img style={{ height: 'auto', width: '900px' }} src="/public/image/szLOGO 7.png" />
  </center>
  <br />
  <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/public/image/416a9bcd-f814-4948-b910-1c37c6f16c74 5.jpeg" className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover' }} alt=""/>
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/public/image/bebe-2 5.webp" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt=""/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="/public/image/szLOGO 7.png" className="d-block w-100" style={{ height: '500px', objectFit: 'cover' }} alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
</div>
</>
)

}




export default PagMod;