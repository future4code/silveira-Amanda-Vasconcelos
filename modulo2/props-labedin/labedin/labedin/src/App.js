import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoAmanda from './img/fotoAmanda.jpg';
import imgEmail from './img/imgEmail.jpeg';
import imgEndereco from './img/imgEndereco.png';
import tango from './img/tango.jpeg';
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoAmanda}
          nome="AMANDA MARIA" 
          descricao="Oi, eu sou a Amanda. Sou estudante da Labenu e já trabalhei como bióloga. Adoro dançar, brincar com minha cachorra, fazer atividades ao ar livre e trabalhar meu autoconhecimento. Estou estudando para migrar de carreira e trabalhar com tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
        <CardPequeno
          imagem={imgEmail}
          nome="Email:"
          descricao="amanda@cmail.com"
        />
        <CardPequeno
          imagem={imgEndereco}
          nome="Endereço:"
          descricao="Rua do Sol, 04"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Conceitos básicos sobre HTML, JS, CSS" 
        />
        
        <CardGrande 
          imagem="https://www.ase.org.uk/sites/default/files/styles/manual_crop/public/shutterstock_465920834.jpg?itok=5lsuoG3A" 
          nome="Biologia" 
          descricao="Trabalhei durante 10 com mamíferos marinhos e adquiri experiencia com mergulho, fotografia, trabalhos científicos. Além disso, atuei como coordenadora do programa de voluntariado" 
        />

        <CardGrande 
          imagem={tango} 
          nome="Dança" 
          descricao="De aluna a professora de Tango - boa comunicaçao, socializaçao e experiencia com plajenamentos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
