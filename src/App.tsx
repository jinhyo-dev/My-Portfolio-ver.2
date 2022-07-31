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
            <div className='descriptionTitle'><span style={{color: '#32a852'}}>Hi <span className='hands'>👋</span> My name is </span><br/><span
              style={{color: '#0D5BE1'}}>Jinhyo kim</span></div>
            <br/>
            <div className='description-phrases'>
              경북소프트웨어고등학교에 재학 중인 고2 개발자 김진효 입니다.
              2021년부터 프로그래밍을 시작하여 학교에서 다양한 활동에
              참여하고 대회 출전 등으로 지식을 쌓아가고 있는 중입니다.
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
                컴퓨터 활용능력 2급<br/>
                정보처리기능사<br/>
                리눅스 마스터 2급<br/>
                네트워크 관리사 2급
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
                교통에 불편한 점이 많아 그 점을 보완하여 웹 페이지로
                도리원 버스 터미널 기준 시내버스와 시외버스의 시간표를
                사용자에게 보여줍니다. 다음 버스 도착 시간까지 얼마
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
              <a target="_blank" href="https://github.com/jinhyo-dev/Electronic-Blackboard-Web">
                <img
                  src="https://cdn.discordapp.com/attachments/935776183688245341/980794042180857937/blackboard.gif"/>
              </a>
              <div className="desc">
                <div className='projectTitle' style={{ color: '#db8d1f' }}>GBSW Blackboard Web</div>
                <br/>
                학교의 공지사항을 공유하는 공지사항 게시판과
                오늘의 급식 메뉴를 전자칠판을 통해 확인 할 수 있습니다.
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
                캡스톤 프로젝트로 웹사이트에서 작물의 현재 현황을 보여주고,
                각 식물을 키우는 방법을 확인 할 수 있습니다.
                C#을 사용해 아두이노로 측정 된 데이터를 전송하고 아두이노를 사용해
                물을 자동으로 공급해 주고 pH값에 따라 산성도를 조절합니다.<br/><br/>
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
