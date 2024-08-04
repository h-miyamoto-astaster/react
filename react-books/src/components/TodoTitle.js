import React,{ memo } from "react";
import styled from 'styled-components';

export const TodoTitle = memo(({title,as}) =>{
    const Heading01 = styled.h1`
        font-size:30px;
        font-weight:bold;
        color:orange;
        text-align:center;
        @media screen and (max-width: 767px) {
            font-size:25px;
        }
    `;
    const Heading02 = styled.h2`
        margin-top:80px;
        font-size:21px;
        font-weight:bold;
        color:green;
        @media screen and (max-width: 767px) {
            font-size:18px;
            text-align:center;
        }
    `;
    if(as === "h1") return <Heading01>{title}</Heading01>;
    if(as === "h2") return <Heading02>{title}</Heading02>;
    return <p>{title}</p>
});