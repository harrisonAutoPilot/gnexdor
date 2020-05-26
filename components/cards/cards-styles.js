import styled from 'styled-components';
import { colors } from '../../utils/colors';
//import farmers from '../../assets/farmers.jpeg';

export const Wrapper = styled.div`
  //background: yellow;

  .card{
    width: 16rem;
    height: 22rem;
    border: 1px solid ${colors.mainLightGreyAlt};
    background: ${props => `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.4)),url(${props.bg});`}
    background-size: 99% 100%;
    background-repeat: no-repeat;
    @media screen and (max-width:375px){
     flex-direction:column;
    width:22rem;
    margin:1rem;
    }

    .card-info{
      height: 10%;
      background: ${colors.mainGreen};
      display: flex;
      flex-direction: column;
      align-items: center;

      .card-info-title{
        font-size: 1rem;
        text-transform: uppercase;
        color: ${colors.mainWhite};
        margin: auto 0;
      }
    }

    .card-value{
      margin-top: 2rem;
      font-size: 1.5rem;
      text-align: center;
      color: ${colors.mainGrey};
    }

    .card-icons{
      //background: yellow;
      padding: .5rem;
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;

      .card-icons-inner{
        font-size: 1.2rem;
        color: ${colors.mainGrey};
        border: 1px solid ${colors.mainGreen};
        padding-left: .3rem;
        padding-top: .2rem;
        border-radius: 5px;
        display: block;
        width: 2rem;
        height: 2rem;
      }
    }

    .card-services{
      //background: yellow;
      //margin-top: 2rem;
      padding: .5rem;

      .card-services-wrapper{
        display: flex;
        align-items: center;
        margin-top: .5rem;

        .card-services-text{
          font-size: .8rem;
          text-transform: capitalize;
          margin-left: .5rem;
          color: ${colors.mainGrey}
        }
      }
    }
  }
`;
