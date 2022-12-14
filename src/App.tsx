import React from 'react';
import './App.css';
import TypeWriters from "./components/TypeWriters";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import LanguageBox from "./components/LanguageBox";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn(), FadeOut());
const FadeUp = batch(Fade(), Move(), Sticky());

const Main = () => {
  return (
    <div>
      <div className='container projects'>
        <div className='pageTitle'>JINHYO's Portfolio</div>
        <div className="overlay"></div>
      </div>

      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span className='scrollZoom aboutMe'>About me.</span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div className='description'>
            <div className='descriptionTitle'><span style={{color: '#32a852'}}>Hi <span className='hands'>π</span> My name is </span><br/><span
              style={{color: '#0D5BE1'}}>Jinhyo kim</span></div>
            <br/>
            <div className='description-phrases'>
              κ²½λΆμννΈμ¨μ΄κ³ λ±νκ΅μ μ¬ν μ€μΈ κ³ 2 κ°λ°μ κΉμ§ν¨ μλλ€.
              2021λλΆν° νλ‘κ·Έλλ°μ μμνμ¬ νκ΅μμ λ€μν νλμ
              μ°Έμ¬νκ³  λν μΆμ  λ±μΌλ‘ μ§μμ μμκ°κ³  μλ μ€μλλ€.
            </div>
          </div>
          <div className='information'>
            <div className='i-container first-i-container'>
              <div className='i-title'>Languages.</div>
              <LanguageBox/>
            </div>
            <div className='i-container'>
              <div className='i-title'>Certificate.</div>
              <ul>
                μ»΄ν¨ν° νμ©λ₯λ ₯ 2κΈ<br/>
                μ λ³΄μ²λ¦¬κΈ°λ₯μ¬<br/>
                λ¦¬λμ€ λ§μ€ν° 2κΈ<br/>
                λ€νΈμν¬ κ΄λ¦¬μ¬ 2κΈ
              </ul>
            </div>
          </div>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span className='scrollZoom projectStart'>Projects.</span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="gallery">
              <a target="_blank" href="https://github.com/jinhyo-dev/gbsw-bustimetable">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/984433735783039006/ezgif.com-gif-maker_3.gif"/>
              </a>
              <div className="desc">
                <div className='projectTitle'>Uiseong Bus TimeTable</div>
                <br/>
                κ΅ν΅μ λΆνΈν μ μ΄ λ§μ κ·Έ μ μ λ³΄μνμ¬ μΉ νμ΄μ§λ‘
                λλ¦¬μ λ²μ€ ν°λ―Έλ κΈ°μ€ μλ΄λ²μ€μ μμΈλ²μ€μ μκ°νλ₯Ό
                μ¬μ©μμκ² λ³΄μ¬μ€λλ€. λ€μ λ²μ€ λμ°© μκ°κΉμ§ μΌλ§
                λ¨μλμ§ μλ €μ£Όλ μλΉμ€λ μ κ³΅ν©λλ€.<br/><br/>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="gallery">
              <a target="_blank" href="https://github.com/jinhyo-dev/Electronic-Blackboard-Web">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif"/>
              </a>
              <div className="desc">
                <div className='projectTitle' style={{ color: '#db8d1f' }}>GBSW Blackboard Web</div>
                <br/>
                νκ΅μ κ³΅μ§μ¬ν­μ κ³΅μ νλ κ³΅μ§μ¬ν­ κ²μνκ³Ό
                μ€λμ κΈμ λ©λ΄λ₯Ό μ μμΉ νμ ν΅ν΄ νμΈ ν  μ μμ΅λλ€.
                <br/><br/>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="gallery">
              <a target="_blank" href="https://github.com/Team-Raise">
                <img
                  src="https://user-images.githubusercontent.com/86733620/176645512-c7d86f75-0834-4f2d-b3f7-a55ce9460057.gif"/>
              </a>
              <div className="desc">
                <div className='projectTitle' style={{ color: '#06bd15' }}>Team Raise - Smart Farm</div>
                <br/>
                μΊ‘μ€ν€ νλ‘μ νΈλ‘ μΉμ¬μ΄νΈμμ μλ¬Όμ νμ¬ νν©μ λ³΄μ¬μ£Όκ³ ,
                κ° μλ¬Όμ ν€μ°λ λ°©λ²μ νμΈ ν  μ μμ΅λλ€.
                C#μ μ¬μ©ν΄ μλμ΄λΈλ‘ μΈ‘μ  λ λ°μ΄ν°λ₯Ό μ μ‘νκ³  μλμ΄λΈλ₯Ό μ¬μ©ν΄
                λ¬Όμ μλμΌλ‘ κ³΅κΈν΄ μ£Όκ³  pHκ°μ λ°λΌ μ°μ±λλ₯Ό μ‘°μ ν©λλ€.<br/><br/>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span className='scrollZoom contact'>Contact.</span>
          </Animator>
        </ScrollPage>

      <ScrollPage>
        <TypeWriters/>
      </ScrollPage>

      </ScrollContainer>
    </div>
  );
}

export default Main;
