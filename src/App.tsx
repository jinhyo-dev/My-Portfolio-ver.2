import React from 'react';
import './App.css';
import typescript from './images/typescript.png'
import java from './images/java.png'
import python from './images/python.png'
import go from './images/go.png'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut
} from "react-scroll-motion";

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
            <div className='descriptionTitle'><span style={{color: '#32a852'}}>Hi <span className='hands'>👋</span> My name is </span><span
              style={{color: '#0D5BE1'}}>Jinhyo kim</span></div>
            <br/>
            경북소프트웨어고등학교에 재학 중인 고2 개발자 김진효 입니다.<br/>
            2021년부터 프로그래밍을 시작하여 학교에서 다양한 활동에<br/>
            참여하고 대회 출전 등으로 지식을 쌓아가고 있는 중입니다.
          </div>
          <div className='information'>
            <div className='languages'>
              <div className='languagesTitle'>languages</div>
              <div className='languagesContainer'>
                <img src={typescript}/>
                <img src={java} style={{width: '23%', marginBottom: '-1.5rem'}}/>
                <img src={python} style={{width: '18%', marginBottom: '-1rem'}}/>
                <img src={go} style={{width: '15%', marginLeft: '3rem'}}/>
              </div>
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
              <a target="_blank" href="img_5terre.jpg">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/984433735783039006/ezgif.com-gif-maker_3.gif"
                  alt="Cinque Terre" width="600" height="400"/>
              </a>
              <div className="desc">
                <h2>Uiseong Bus TimeTable</h2>
                교통에 불편한 점이 많아 그 점을 보완하여 웹 페이지로 <br/>
                도리원 버스 터미널 기준 시내버스와 시외버스의 시간표를 <br/>
                사용자에게 보여줍니다. 다음 버스 도착 시간까지 얼마 <br/>
                남았는지 알려주는 서비스도 제공합니다.<br/><br/>
              </div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="gallery">
              <a target="_blank" href="img_5terre.jpg">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/984433735783039006/ezgif.com-gif-maker_3.gif"
                  alt="Cinque Terre" width="600" height="400"/>
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={FadeUp}>
            <div className="gallery">
              <a target="_blank" href="img_5terre.jpg">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/984433735783039006/ezgif.com-gif-maker_3.gif"
                  alt="Cinque Terre" width="600" height="400"/>
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div>FUCK YOU</div>
        </ScrollPage>

      </ScrollContainer>
    </div>
  );
}

export default Main;
