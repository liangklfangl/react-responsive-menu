const styles = require("./header.less");
import { Select, Menu, Row, Col, Icon, Button, Popover } from 'antd';
import { Link } from 'react-router';
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
const data = require("../mock/data.js");
const Option = Select.Option;
function generateMenuItem(item) {
  //Generate an Menu.Item
    const child = <Link to={item.link.to}>
           {item.link.text}
      </Link>
    return (
      <Menu.Item key={item.key.toLowerCase()}>
        {child}
      </Menu.Item>
    );
}
class ResponsiveMenu extends React.Component{
  state = {
     horizontal:true
  }
  componentDidMount(){
    //when width is [320,1080], we will not set menus to header automatically.
    //instead, we will use Popover
    require('enquire.js').register('only screen and (min-width:320px) and (max-width:1080px)',{
      match:()=>{
         this.setState({horizontal:false})
      },
      unmatch:()=>{
        this.setState({horizontal:true});
      }
    });
  }

  render(){
  const {horizontal} = this.state; 
  const mode = horizontal ? "horizontal" :"inline";
  const menuItems = data.menus.map(generateMenuItem);
  const menus = 
     <Menu mode={mode} className="menu" id="nav">
       {menuItems}
     </Menu>
  const searchText = "Search component...";
    return (
          <div className="header">
            <If condition={!this.state.horizontal }>
              <Popover content={menus} overlayStyle={{}} overlayClassName="popover-menu">
                  <Icon type="menu" className="popover-icon"/>
              </Popover>
            </If>
             <Row>
                <Col lg={4} md={6} sm={24} xs={24}>
                   <Link id="logo">
                    <img id="banner" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"/>
                    <span className="corp">Alibaba</span>
                  </Link>
                </Col>
                <Col lg={20} md={18} sm={0} xs={0}>
                 <div id="search-box">
                  <Select combobox placeholder={searchText} className="select-content">
                  </Select>
                 </div>
                 {mode == "horizontal" ? menus :null}
                </Col>
             </Row> 
         </div>
        )
  }
}
ReactDOM.render(<ResponsiveMenu/>,document.getElementById("react-content"));