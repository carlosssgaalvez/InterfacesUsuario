import React, {useEffect,useState} from 'react';
import './Instructions.css';
import { useNavigate } from 'react-router-dom';
import '../../styles/inputs.css';
import '../../styles/buttons.css';
import '../../styles/globalStyles.css';
import imgLogo from '../../images/logo.png';
import PlainText from '../../components/Text/PlainText';
import ButtonBack from '../../components/Button/ButtonBack';
import ImageLogo from '../../components/Image/ImageLogo';
import Title from '../../components/Text/Title';
import ButtonAdvance from '../../components/Button/ButtonAdvance';
import CheckBox from '../../components/CheckBox/CheckBox';
import Label from '../../components/Text/Label';
import DivLabelInput from '../../components/divs/divLabelInput';

function InstructionsChain() {
    const [checkedMode4, setCheckedMode4] = useState(false);
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
    const handleClickBack = () => {
      user.checkedMode4 = checkedMode4;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].checkedMode4 = checkedMode4;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/selectMode');
    }

    useEffect(() => {
      if (user) {
        setCheckedMode4(user.checkedMode4);
      }
    }, [user]);

    const handleClickNext = () => {
      user.checkedMode4 = checkedMode4;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('user', JSON.stringify(user));
      const allUsers = localStorage.getItem('users');
      const allUsersParsed = JSON.parse(allUsers) || [];
      const userIndex = allUsersParsed.findIndex(u => u.username === user.username);
      allUsersParsed[userIndex].checkedMode4 = checkedMode4;
      localStorage.setItem('users', JSON.stringify(allUsersParsed));
      navigate('/chain');
    }

    const handleAccessDenied = () => {
      navigate('/logIn');
    };
    const handleCheckBoxChange4 = () => {
      setCheckedMode4(!checkedMode4);
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
    

    const isLoggedIn = user !== undefined && user !== "";
    return isLoggedIn? (
      <div className=" container Instructions">
      <header className="instruction-header">   
          <ImageLogo className={"imgLogo"} src={imgLogo}/>

          <Title className="title" valueText={'MODO CADENA:'}/>
          <Title className="title" valueText={'¿Cómo Jugar?'}/>
          <PlainText className="plainText2" textValue={'Al principio se te da una palabra aleatoria.'}/>
          <PlainText className="plainText2" textValue={'Tienes 6 segundos para escribir otra palabra que empiece por la misma letra.'}/>
          <PlainText className="plainText2" textValue={'Por cada palabra que escribas se te darán puntos y se reiniciará el tiempo.'}/>
          <PlainText className="plainText2" textValue={'Puedes terminar la partida en cualquier momento pulsando "Salir", y se contarán los puntos obtenidos hasta ese momento.'}/>
          <br></br>

      </header>
      <div className="checkbox-container">
              <DivLabelInput>
                <CheckBox className="checkbox-style" id={"CADENA"} checked={checkedMode4} onChange={handleCheckBoxChange4}/>
                <Label className="textSettings" forId={'CADENA'} textValue={'No volver a mostrar instrucciones'}/>
              </DivLabelInput>
        </div>
        <div className="buttonContainer2">
            <ButtonBack  valueButton={'Volver'} onClick={handleClickBack}/>
            <ButtonAdvance valueButton={'Siguiente'} onClick={handleClickNext}/>
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
export default InstructionsChain;