import {  faDashboard, faExchange, faInfoCircle, faMoneyBillTransfer, faRightFromBracket, faSliders, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styledComponents from "styled-components";
import "./navbar.css";
import { mobile } from "../../responsive";

const Container = styledComponents.div`
    background-color: #f4f8f8;
    width: 220px;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 10;
    ${mobile({width:"60px"})}
`
const Wrapper = styledComponents.div`
    display: flex;
    margin-left: 20px;
    flex-direction: column;
    justify-content: space-between;
    height: 95%;
    ${mobile({marginLeft:"10px"})}
`
const Top = styledComponents.div`

`
const Title = styledComponents.div`
    font-size: 24px;
    ${mobile({display:"flex",flexDirection:"column",fontSize:"16px"})}
    
`
const H1 = styledComponents.span`
    color: #1d3eaa;
    font-weight: 700;
`
const H2 = styledComponents.span`
    font-weight: 600;
`
const Middle = styledComponents.div`
    margin-top: -160px;
`
const Items = styledComponents.div`
    display: flex;
    flex-direction: column;
`
const Item = styledComponents.div`
    display: flex;
    font-size: 16px;
    padding: 15px;
    margin-bottom: 10px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.5s ease;
    ${mobile({padding:"15px",flexDirection:"column"})}
    &:hover{
        background-color: #1d3eaa;
        color: white;
    }
`
const Icons = styledComponents.div`
    margin-right: 10px;
    ${mobile({marginRight:"0px",})}
    
`
const Font = styledComponents.span`
    ${mobile({display:"none"})}
`
const Bottom = styledComponents.div`
    
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Title>
              <H1>Rypto</H1><H2>Carbon</H2>
          </Title>
        </Top>
        <Middle>
          <Items>
            <NavLink to='/' className="navstyle">
            <Item>
              <Icons>
                  <FontAwesomeIcon icon={faUser}/>
              </Icons>
              <Font>Home</Font>
            </Item>
            </NavLink>
            <NavLink to='/dashboard' className="navstyle">
            <Item>
              <Icons>
              <FontAwesomeIcon icon={faDashboard}/>
              </Icons><Font>Dashboard</Font>
            </Item>
            </NavLink>
            <NavLink to='/wallet' className="navstyle">
            <Item>
              <Icons>
              <FontAwesomeIcon icon={faWallet}/>
              </Icons><Font>Wallet</Font>
            </Item>
            </NavLink>
            <NavLink to='/trade' className="navstyle">
            <Item>
              <Icons>
              <FontAwesomeIcon icon={faExchange}/>
              </Icons><Font>Trade</Font>
            </Item>
            </NavLink>
            <NavLink to='/exchange' className="navstyle">
            <Item>
              <Icons>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
              </Icons><Font>Exchange</Font>
            </Item>
            </NavLink>
          </Items>
        </Middle>
        <Bottom>
          <Items>
            <Item>
              <Icons><FontAwesomeIcon icon={faInfoCircle}/></Icons><Font>Information</Font>
            </Item>
            <Item>
              <Icons><FontAwesomeIcon icon={faSliders}/></Icons><Font>Account Settings</Font>
            </Item>
            <Item>
              <Icons><FontAwesomeIcon icon={faRightFromBracket}/></Icons><Font>Log Out</Font>
            </Item>
          </Items>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
