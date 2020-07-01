import React from "react";
import {Link} from "react-router-dom";
import { Layout, Menu, Typography, Button } from 'antd';
import "./style.css"
import { Popover } from "antd";
const { Header, Content, Footer } = Layout;
const {Text} = Typography;


function Basicpage(props){
    let token = localStorage.getItem("userToken")
    function logOut(){
        token = "";
        localStorage.removeItem("userToken");
    }
    return(
        <>
            <Layout className="layout">
                <Header>
                <div className="header">
                    <Menu theme="dark" mode="horizontal">
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/auth">Authentification</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/read">Read list</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/write">Write</Link></Menu.Item>
            
                    </Menu>
                    {
                    token?
                        <Popover placement="bottomRight" title="Cliclk that to log out" content={<Button onClick={logOut}> Log out</Button>}>
                            <Text className="status">Authorized  </Text>
                        </Popover>
                    :  
                        <Popover placement="bottomRight" title="To authorize please wisit the Authorization page" content={<Link to="/auth">Or Click this link</Link>}>
                            <Text className="status">Unauthorized</Text>
                        </Popover>
                    }
                </div>
                </Header>
                <Content style={{ padding: '0 50px', minHeight :'98%'}}>
                <div style={{ background: '#fff', padding: 24, minHeight: 800 }} className="content">
                    {props.children}
                 </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    )
}

export default Basicpage;