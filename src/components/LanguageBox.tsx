import React from 'react';
import typescript from "../images/typescript.png";
import java from "../images/java.png";
import python from "../images/python.png";
import go from "../images/go.png";

const LanguageBox = () => {
  return (
    <div className='languageBox-container'>
      <div className="languageBox first-languageBox">
        <div>
          <img src={typescript} style={{width: '100%'}} alt='typescript'/>
        </div>
        <div className="languageName">
          Typescript
        </div>
      </div>

      <div className="languageBox">
        <div>
          <img src={java} style={{width: '72%'}} alt='java'/>
        </div>
        <div className="languageName">
          Java
        </div>
      </div>

      <div className="languageBox">
        <div>
          <img src={python} style={{width: '72%'}} alt='python'/>
        </div>
        <div className="languageName">
          Python
        </div>
      </div>

      <div className="languageBox">
        <div>
          <img src={go} style={{width: '53%'}} alt='go'/>
        </div>
        <div className="languageName">
          Go
        </div>
      </div>
    </div>
  )
}

export default LanguageBox;