import React from 'react';
import './Settings.css';
import ImageLogo from '../../components/Image/ImageLogo';
import Logo from '../../images/logo.png';
import DivGap4 from '../../components/divs/divGap4';


function Settings() {
  return (
    <div className="settings">
        <header className="Profile-header">
        </header>
        <ImageLogo className={"imgLogo"} src={Logo}/>
        <DivGap4>
            <div className="container">
            </div>
        </DivGap4>
    </div>
  );
 
}
export default Settings;