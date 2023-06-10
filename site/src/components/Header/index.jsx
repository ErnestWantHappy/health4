import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
var a = "";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
      dataImg1: {},
      classLang:"languageDiv",
      lang:0
    };
  }
  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({ data: this.props.dataImg1 });
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
    }, 500);
  };

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
    setTimeout(() => {}, 500);
  }

  changeLang = async (e) => {
    this.props.getMsg(e.target.value);
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
      this.setState({ dataImg1: this.props.dataImg1 });
    }, 100);
  };

  changeLanguage(index){
    this.setState({lang:index});
    index=index+1;
    this.props.getMsg(index);
    setTimeout(() => {
      this.setState({ homePage: this.props.homePage });
      this.setState({ dataImg1: this.props.dataImg1 });
    }, 100);
  }

  render() {
    return (
      this.state.homePage.navigation && (
        <header>
          <div className="header-inner">
              <span className="title">
                <div className="logo">
                <Link to={"/"}>
                  <img src="/logo512.png" width={35} height={35}></img>
                  <span>{this.state.homePage.bottom.title}</span>
                </Link>
                </div>
              </span>
            <div className="gnav">
            <div className="daohang">
              <Link to={"/Article"}>
                  <span>{this.state.homePage.navigation[0]}</span>
               
              </Link>
              <Link to={"/Article"}>
                  <span>{this.state.homePage.navigation[1]}</span>
                
              </Link>
              <Link to={"/Article"}>
                  <span>{this.state.homePage.navigation[2]}</span>
              
              </Link>
              <Link to={"/Article"}>
                  <span>{this.state.homePage.navigation[3]}</span>
              </Link>
            </div>
            {/* <select className="language" onChange={this.changeLang}>
              <option value={1}>中文</option>
              <option value={2}>英文</option>
              <option value={3}>日语</option>
            </select> */}
            <div className="languages">
              {this.state.homePage.language.map((item,index)=>{
                return <div className={index===this.state.lang? this.state.classLang:""} key={index} onClick={this.changeLanguage.bind(this,index)}
                >
                  <span>{item}</span>
                  </div>
              })}
            </div>
            </div>
            
          </div>
        </header>
      )
    );
  }
}
export default Header;
