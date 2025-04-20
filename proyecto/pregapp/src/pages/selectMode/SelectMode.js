import { useLocation } from 'react-router-dom';
import ButtonMenu from '../../components/Button/ButtonMenu';
import DivGap4 from '../../components/divs/divGap4';
import DivLabelInput from '../../components/divs/divLabelInput';
import { useNavigate } from 'react-router-dom';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import ButtonBack from '../../components/Button/ButtonBack';
import '../../styles/buttons.css';
import Title from '../../components/Text/Title';

function SelectMode() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const { user, password } = location.state ||{} ;
    const handleClickJugarModo1 = () => {
      navigate('/question', {state: {user: user, password: password}});
    }
    const handleClickJugarModo2 = () => {
      //navigate('/modo2');
      console.log("modo 2 seleccionado");
    }
    const handleClickJugarModo3 = () => {
      //navigate('/modo3');
      console.log("modo 3 seleccionado");
    }
    const handleClickJugarModo4 = () => {
      //navigate('/modo4');
      console.log("modo 4 seleccionado");
    }
    const handleExit = () => {
      navigate('/home', {state: {user: user, password: password}}); 
    }
    console.log("user:",user, "password",password);
    const isLoggedIn = user !== undefined && user !== "" && password !== undefined && password !== "";
    return isLoggedIn? (
      <div className='container'>
          <DivGap4>
            <br/><br/>
          <ImageLogo className={"imgLogo"} src={Logo}/>
            <Title className={"title"} valueText={"SELECCIONA MODO DE JUEGO"}/>
            <DivLabelInput>
            <ButtonMenu idButton={'button1'} valueButton={'MODO PREGUNTAS'} colorButton={'#1ABC9C'} onClick={handleClickJugarModo1}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button2'} valueButton={'MODO 2'} colorButton={'#C0C0C0'} onClick={handleClickJugarModo2}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button3'} valueButton={'MODO 3'} colorButton={'#007BFF'} onClick={handleClickJugarModo3}/>
              <br/><br/>
            </DivLabelInput>
            <DivLabelInput>
            <ButtonMenu idButton={'button4'} valueButton={'MODO 4'} colorButton={'#2ECC71'} onClick={handleClickJugarModo4}/>
              <br/><br/>
            </DivLabelInput>
            </DivGap4>
          
          <br/><br/>
          <div className="buttonContainer">
          <ButtonBack valueButton={'Volver'} onClick={handleExit}/>
          
          </div>
          <br/><br/>
      </div>
    ): (
      <div>
        <h1>acceso denegado</h1>
        <ButtonBack  valueButton={'Volver'} onClick={handleExit}/>
      </div>
      );
}

export default SelectMode;