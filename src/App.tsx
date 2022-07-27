import React from 'react';
import './App.css';
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
      <div className='container projects main'>
        <h1>JINHYO's Portfolio</h1>
        <div className="overlay"></div>
      </div>

      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "70px" }}>About me</span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <div style={{ height: '1500vh'}}>
            <img src={'https://cdn.discordapp.com/attachments/935776183688245341/994952064297861121/unknown.png'}/>
          </div>
        </ScrollPage>

        <ScrollPage>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "70px" }}>Projects</span>
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
