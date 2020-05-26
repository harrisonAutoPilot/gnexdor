import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Wrapper = styled.div`
  //background: yellow;
  padding: 1rem;
  position: relative;
  margin-bottom: 2rem;

  .access{
    text-align: center;
    width: 50%;
    margin: 2rem auto;

    @media screen and (max-width:375px){

    }

    .access-header{
        color: ${colors.mainGrey};
        text-transform: capitalize;
        font-size: 1.6rem;
        font-weight: 300;
        @media screen and (max-width:500px){
         font-size: 2rem;
         font-weight: 300;
        }
    }

    .access-line{
        width: 5rem;
        height: .2rem;
        background: ${colors.mainGreen};
        margin-left: 44%;
        margin-top: .5rem;
        @media screen and (max-width:375px){
         margin-left: 25%;
         margin-top: .5rem;
        }
        @media screen and (max-width:500px){
         margin-left: 18%;
         margin-top: .5rem;
        }
    }
  }

  .access-card{
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width:375px){
     flex-direction:column;
     justify-content:space-between;
    }
  }

`;
