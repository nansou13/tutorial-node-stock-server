import styled, { keyframes } from 'styled-components/macro'

const pulse = keyframes`
  from {
    transform: scale(1);
  }

  16.6666667%{
    transform: scale(1.3);
  }

  30%{
    transform: scale(1);
  }

  to {
    transform: scale(1);
  }
`

const pulse2 = keyframes`
  from {
    transform: scale(1);
  }

  30%{
    transform: scale(1.3);
  }

  50%{
    transform: scale(1);
  }

  to {
    transform: scale(1);
  }
`

const pulse3 = keyframes`
  from {
    transform: scale(1);
  }

  50%{
    transform: scale(1.3);
  }

  66.6666667%{
    transform: scale(1);
  }

  to {
    transform: scale(1);
  }
`

const pulse4 = keyframes`
  from {
    transform: scale(1);
  }

  66.6666667%{
    transform: scale(1.3);
  }

  83.3333333%{
    transform: scale(1);
  }

  to {
    transform: scale(1);
  }
`

const pulse5 = keyframes`
  from {
    transform: scale(1);
  }

  83.3333333%{
    transform: scale(1.3);
  }

  to {
    transform: scale(1);
  }
`

export const SCLoader = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SCCircles = styled('span')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  font-size: 10px;
  margin-bottom: 16px;

  span:nth-of-type(1) {
    background: ${(props) => props.theme.green.medium};
    animation: ${pulse} 1.2s ease-in-out infinite;
  }
  span:nth-of-type(2) {
    background: ${(props) => props.theme.green.dark};
    animation: ${pulse2} 1.2s ease-in-out infinite 0.2s;
  }
  span:nth-of-type(3) {
    background: ${(props) => props.theme.green.darkest};
    animation: ${pulse3} 1.2s ease-in-out infinite 0.4s;
  }
  span:nth-of-type(4) {
    background: ${(props) => props.theme.green.mediumAlt};
    animation: ${pulse4} 1.2s ease-in-out infinite 0.6s;
  }
  span:nth-of-type(5) {
    background: ${(props) => props.theme.blue.light};
    animation: ${pulse5} 1.2s ease-in-out infinite 0.8s;
  }
`

export const SCCircle = styled('span')`
  width: 3.2em;
  height: 3.2em;
  border-radius: 50%;
  display: inline-block;
`

export const SCText = styled('span')`
  color: ${(props) => props.theme.blue.mediumDark};
  font-family: ${(props) => props.theme.fontFamily.titles};
  font-size: 30px;
  line-height: 58px;
  text-align: center;
`

export const SCLoaderElement = styled('div')`
  position: absolute;
  top: 0%;
  left: 0%;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 3;

  ${SCCircles} {
    width: 60%;
    max-width: 300px;
    font-size: 8px;
  }

  ${SCText} {
    display: none;
  }
`
