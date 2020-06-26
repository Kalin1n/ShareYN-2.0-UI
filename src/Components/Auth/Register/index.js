import React, { Component } from "react";
import {Form, Input, Button, Checkbox, Typography, Result} from "antd";
const {Title} = Typography;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

class RegisterForm extends Component{
    constructor(props){
        super(props);
        this.state = { 
            sexOptions : [{value : "M", label : "Male"}, {value : "F", label : "Female"}],
            countryOptions :[],
            selected : undefined //[{value : "ukr", label : "Ukraine 🇺🇦"}, {value : "ger", label : "Germany 🇩🇪"}, {value : "gbr", label : "Grear britan 🇬🇧"}]
        }
        this.nameChange = this.nameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.nicknameChange = this.nicknameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordCheckChange = this.passwordCheckChange.bind(this)
        this.sendRequest = this.sendRequest.bind(this)
    }

    nameChange(event){
        this.props.setNameText(event.target.value);
    }

    emailChange(event){
        this.props.setEmailText(event.target.value);
    }

    nicknameChange(event){
        this.props.setNicknameText(event.target.value);
    }

    passwordChange(event){
        this.props.setPasswordText(event.target.value);
    }

    passwordCheckChange(event){
        this.props.setPasswordCheckText(event.target.value);
    }

    async componentWillMount(){
        var data = await (await fetch("https://restcountries.eu/rest/v2/all", {method : "GET"})).json();
        var countries = [];
        await data.map( country => countries.push({label : country.name, capital : country.capital, value : country.alpha3Code}));
        console.log(countries);
        this.setState({countryOptions : countries})
    }

    sendRequest(event){
        event.preventDefault()
        this.props.changeError(null)
        if( this.props.password !== this.props.passwordCheck){
            console.log("Passwords not matching ")
            this.props.changeError("Passwords not matching")
            return;
        }
        else{
            console.log("name : ", this.props.name, " email : ", this.props.email, " nickname : ", this.props.nickname)
            this.props.register(this.props.name, this.props.email, this.props.nickname, this.props.password);
        }

    }

    render(){
        return(
           <>
                    
                    <Form {...layout}>
                    <Title>Registration </Title>
                        <Form.Item label="Name" required>
                            <Input type="name" placeholder="Name" value={this.props.name} onChange={this.nameChange}/>
                        </Form.Item >
                        <Form.Item  label="Email">
                            <Input type="email" placeholder="Email" value={this.props.email} onChange={this.emailChange}/>
                        </Form.Item >

                        {/*<FormField label="Country">
                            <Select 
                                name="select" 
                                placeholder="Input your country" 
                                options={this.state.countryOptions} 
                                labelKey="label" 
                                value={this.state.countryOptions.value}
                                multiple={false} 
                                onChange={event => this.setState({selected : event.value})}
                            />
                        </FormField>*/}
                        {/*
                        <Form.Item  label="Nickname">
                            <Input type="text" placeholder="Nickname" value={this.props.nickname} onChange={this.nicknameChange}/>
                        </Form.Item >
                        */}
                        <Form.Item  label="Password">
                            <Input type="password" placeholder="password" value={this.props.password} onChange={this.passwordChange}/>
                        </Form.Item >
                        <Form.Item  label="Password again">
                            <Input type="password" placeholder="password again" value={this.props.passwordCheck} onChange={this.passwordCheckChange}/>
                        </Form.Item >
                        <Form.Item label="Submit"> 
                            <Button type="primary" onClick={this.sendRequest}> Registrer </Button>
                        </Form.Item>
                    </Form>   
                    {this.props.status === "REJECTED" ? <Result>{this.props.error}</Result> : <> </> }
                    {this.props.status === "RESOLVED" ? <Result status="success" title="User loged in!"/> :<></>}
           </>
        )
    }
}

export default RegisterForm;