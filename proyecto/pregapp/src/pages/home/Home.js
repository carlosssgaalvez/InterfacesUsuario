import React from 'react';
import Title from '../../components/Text/Title';
import { useLocation } from 'react-router-dom';
import PlainText from '../../components/Text/PlainText';
import ButtonMenu from '../../components/Button/ButtonMenu';

function Home() {
  
  const location = useLocation();
  const { user, password } = location.state ||{} ;
  console.log("user:",user, "password",password);
  return user !== undefined? (
   
    <div>
        <Title className={'title'} valueText={'nombreJuego'}/>
        <PlainText className={'plainText'} textValue={user}/>
        <br></br>
        <PlainText className={'plainText'} textValue={password}/>

        <ButtonMenu idButton={'button1'} valueButton={'Jugar'} colorButton={'#1ABC9C'} onClick={() => console.log('Jugar clicked')}/>
    </div>
  ):<h1>acceso denegado</h1>;
}

export default Home;