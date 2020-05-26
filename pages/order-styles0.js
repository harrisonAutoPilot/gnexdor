import styled from 'styled-components';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

export const SmallStyledButton = styled(Link)`
color: white;
font-size: 2rem;
border:none;
text-decoration: none;
 :hover{
   color: #00b300;
 }
`;

export const Btn = styled(Button)`
&.ant-btn{
   background: #00b300 !important;
   color: #fff !important; 
   border: 1px solid #00b300 !important;
   font-size: 1.3rem;
 }
 
 &.ant-btn:hover{
   background: #fff !important;
     color: #00b300 !important;
     border: 1px solid #00b300 !important; 
     box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 }
`;
