import styled from "styled-components"; 
export const SidebarLink=styled.div`
    height: 40px;
    opacity: ${({display})=>display?'1':'0.2'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border-radius:22px;
    width: 45px;

& img {
    height: 36px;
    border-radius: 10px;
}

& div {
    font-family: Roboto, Arial;
    font-size: 10px;
}
& .company{
  position:relative;
}
`
