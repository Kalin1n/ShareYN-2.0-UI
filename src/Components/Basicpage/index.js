import React from "react";
import {Link} from "react-router-dom";
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

function Basicpage(props){
    return(
        <>
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/auth">Authentification</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/read">Read list</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/write">Write</Link></Menu.Item>
                </Menu>
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