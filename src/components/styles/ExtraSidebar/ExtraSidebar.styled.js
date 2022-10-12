import styled from "styled-components"; 

export const ExtraSidebar=styled.div`
    z-index: 100;
    padding-top:42px ;
    position: fixed;
    height: 100%;
    padding-right: 80px;
    padding-left: 87px;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(22, 25, 30,0.82);
    color: white;
    width: 247px;
    display: ${({display})=>display?display:'none'};
`
