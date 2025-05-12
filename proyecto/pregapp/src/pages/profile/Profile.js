import React, {useState, useEffect} from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import Title from '../../components/Text/Title';
import Profimg from '../../images/perfilImg.png';
import Image from '../../components/Image/Image';
import ButtonBack from '../../components/Button/ButtonBack';
import DivGap4 from '../../components/divs/divGap4';


function Profile() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState('');
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else {
          setUser(undefined); // or set it to an empty string or any other default value
        }
      },[]);
    const handleClick = () => {
        navigate('/home');
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };

    const isLoggedIn = user !== undefined && user !== "" ;
    return isLoggedIn? (
     <div className="container">
      <header className="Profile-header">   
        
          <Image className={"imgProfile"} src={Profimg}/>
          <DivGap4>
          <br></br>
            <Title className="title" valueText={user.username}/>
            <p className="labelText">{user.email}</p>
            <Title className="title" valueText={'Preguntas Acertadas'}/>
            <p>{user.points/20}</p>
           
           
          </DivGap4>
       
      </header>
        <div className="buttonContainer">
        <ButtonBack  valueButton={'Volver'} onClick={handleClick}/>
        </div>
    </div>
  ): (
    <div>
      <h1>Acceso denegado</h1>
      <p>Por favor, inicie sesión para acceder a esta página.</p>
      <ButtonBack  valueButton={'Volver'} onClick={handleAccessDenied}/>
    </div>
    );
 
}
export default Profile;