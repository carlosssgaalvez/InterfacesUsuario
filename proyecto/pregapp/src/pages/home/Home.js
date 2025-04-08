import React from 'react';
import Title from '../../components/Text/Title';
import { useLocation } from 'react-router-dom';
import PlainText from '../../components/Text/PlainText';

function Home() {
  
  const location = useLocation();
  const { user, password } = location.state || {};

  return (
    <div>
        <Title className={'title'} valueText={'nombreJuego'}/>
        <PlainText className={'plainText'} textValue={user}/>
        <PlainText className={'plainText'} textValue={password}/>
    </div>
  );
}

export default Home;