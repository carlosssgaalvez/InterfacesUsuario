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
import Image from '../../components/Image/Image';
import ButtonBack from '../../components/Button/ButtonBack';
import DivGap4 from '../../components/divs/divGap4';


function Profile() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { user, password } = location.state ||{} ;
    const handleClick = () => {
        navigate('/home', {state: {user, password}});
    }

    const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
    return isLoggedIn? (
     <div className="Profile">
      <header className="Profile-header">   
        
          <Image className={"imgProfile"} src={Profimg}/>
          <DivGap4>
            <Title className="title" valueText={user}/>
            <Label className="labelText" forId={'descripcion'} textValue={'Texto por determinar'}/>
            <Title className="title" valueText={'Preguntas Acertadas'}/>
            <Label className="labelText" forId={'aciertos'} textValue={'2000'}/>
           
          </DivGap4>
       
      </header>
        <div className="buttonContainer">
        <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
        </div>
    </div>
  ): (
    <div>
      <h1>acceso denegado</h1>
      <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
    </div>
    );
 
}
export default Profile;