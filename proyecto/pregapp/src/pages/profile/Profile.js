import React from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Title from '../../components/Text/Title';
import Profimg from '../../images/perfil_sin_marca.png';
import Label from '../../components/Text/Label';
import Button from '../../components/Button/Button';
import Image from '../../components/Image/Image';
import ButtonBack from '../../components/Button/ButtonBack';
import DivGap4 from '../../components/divs/divGap4';


function Profile() {
    // Esto es un ejemplo para probar los componentes
    const navigate = useNavigate();
    const { user, password } = {user:'Usuario', password:'1234' }; 
    //usar location.state para obtener el usuario y contraseña(cuando este listo home);
    const handleClick = () => {
        navigate('/home', {state: {user, password}});
      }

  return (
     <div className="Profile">
      <header className="Profile-header">   
        <div className="container">
          <Image className={"imgProfile"} src={Profimg}/>
          <DivGap4>
            <Title className="title" valueText={user}/>
            <Label className="labelText" forId={'descripcion'} textValue={'Texto por determinar'}/>
            <Title className="title" valueText={'Preguntas Acertadas'}/>
            <Label className="labelText" forId={'aciertos'} textValue={'2000'}/>
           
          </DivGap4>
        </div>
      </header>
        <div className="buttonContainer">
        <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
        </div>
    </div>
  );
 
}
export default Profile;