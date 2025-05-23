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
import Subtitle from '../../components/Text/Subtitle';



function Profile() {
    const navigate = useNavigate(); 
    const [user, setUser] = useState('');
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        console.log(storedUser, 'storedUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          console.log(user);
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
 
    useEffect(() => {
      document.documentElement.classList.add('page-scrollable');
      document.body.classList.add('page-scrollable');
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.classList.add('page-scrollable');
      }
    
      return () => {
        document.documentElement.classList.remove('page-scrollable');
        document.body.classList.remove('page-scrollable');
        if (rootElement) {
          rootElement.classList.remove('page-scrollable');
        }
      };
    }, []); 

    const isLoggedIn = user !== undefined && user !== "" ;
    return isLoggedIn? (
     <div className="container">
      <header className="Profile-header">   
        
          <Image className={"imgProfile"} alt={'imagen'}src={Profimg}/>
            <Title className="title" valueText={user.username} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.email} speakOnFocus/>

            <Title className="title" valueText={'Puntos Totales'} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.QuestionPoints + user.WordlePoints + user.ChainPoints} speakOnFocus/>
            <br/><br/>
            <div className="divisor">
            <div className="line">
            <Title className="title" valueText={'Preguntas Acertadas'} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.QuestionPoints/20} speakOnFocus/>
            </div>

            <div className="line">
            <Title className="title" valueText={'Wordles Acertados'} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.WordlePoints/200} speakOnFocus/>
            </div>
            
            </div>
            <br/><br/>
            <div className="divisor">
            <div className="line">
            <Title className="title" valueText={'Menos movimientos en Memoria'} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.MemoryGameMoves} speakOnFocus/>
            </div>

            <div className="line">
            <Title className="title" valueText={'Más palabras seguidas en Cadena'} speakOnFocus/>
            <Subtitle className="profileText2" valueText={user.ChainLength} speakOnFocus/>
            </div>
          </div>
            
          <br/>
          
       
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