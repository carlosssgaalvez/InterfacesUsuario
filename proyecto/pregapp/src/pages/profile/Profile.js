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
import PlainText from '../../components/Text/PlainText';



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
        
          <Image className={"imgProfile"} src={Profimg}/>
            <Title className="title" valueText={user.username}/>
            <PlainText className="profileText2" textValue={user.email}/>

            <Title className="title" valueText={'Puntos Totales'}/>
            <PlainText className="profileText2" textValue={user.QuestionPoints + user.WordlePoints + user.ChainPoints}/>
            <br/><br/>
            <div className="divisor">
            <div className="line">
            <Title className="title" valueText={'Preguntas Acertadas'}/>
            <PlainText className="profileText2" textValue={user.QuestionPoints/20}/>
            </div>

            <div className="line">
            <Title className="title" valueText={'Wordles Acertados'}/>
            <PlainText className="profileText2" textValue={user.WordlePoints/200}/>
            </div>
            
            </div>
            <br/><br/>
            <div className="divisor">
            <div className="line">
            <Title className="title" valueText={'Menos movimientos en Memoria'}/>
            <PlainText className="profileText2" textValue={user.MemoryGameMoves}/>
            </div>

            <div className="line">
            <Title className="title" valueText={'Más palabras seguidas en Cadena'}/>
            <PlainText className="profileText2" textValue={user.ChainLength}/>
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