import React from 'react'
import {Wrapper} from './cards-styles';
import {GiBriefcase, GiGears, GiNetworkBars, GiBoltShield} from 'react-icons/gi'
import {MdCheck} from 'react-icons/md';

const Card = props => {
    return (
        <Wrapper bg={props.item.bg}>

        </Wrapper>
    )
}

export default Card
// <div className="card">
//     <div className="card-info">
//         <p className="card-info-title">
//             {props.item.title}
//         </p>
//     </div>
//     <p className="card-value">
//         {props.item.value}
//     </p>
//
//     <div className="card-icons">
//         <span className="card-icons-inner">
//             <GiBriefcase/>
//         </span>
//         <span className="card-icons-inner">
//             <GiGears/>
//         </span>
//         <span className="card-icons-inner">
//             <GiNetworkBars/>
//         </span>
//         <span className="card-icons-inner">
//             <GiBoltShield/>
//         </span>
//     </div>
//
//     <div className="card-services">
//        <div className="card-services-wrapper">
//           <span><MdCheck/></span>
//           <span className="card-services-text">
//             {props.item.msg1}
//           </span>
//        </div>
//        <div className="card-services-wrapper">
//           <span><MdCheck/></span>
//           <span className="card-services-text">
//             {props.item.msg2}
//           </span>
//        </div>
//     </div>
// </div>
