import { Button } from 'antd';
import  React  from 'react';
import './index.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
    };
  }

  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({ homePage: this.props.homePage
    }); 
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {

  };

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate(){
    setTimeout(() => {
        this.setState({ homePage: this.props.homePage
         });
      }, 500);
      // console.log(this.props.homePage.bottom&&this.props.homePage.bottom.title)
      // console.log(this.state.homePage.bottom&&this.state.homePage.bottom.title)
  }

  render() {
    return (this.state.homePage.bottom&&
        <footer>
          <div className="footer">
            <div className='foot-inner'>
            <div className='foot-header'>
                <div className="logo">
                  <div> <img src="/logo512.png" width={25}></img>
                  <span>{this.state.homePage.bottom.title}</span>
                  </div>
                 
                  <div className='cont'>
                    <div>{this.state.homePage.bottom.person}</div>
                    <div>栗城 园</div>
                  </div>
                  <div className='cont'>
                    <div>{this.state.homePage.bottom.tel}</div>
                    <div>0081-8058975168</div>
                  </div>
                  <div className='cont'>
                    <div>{this.state.homePage.bottom.email}</div>
                    <div>yien_consult@126.com</div>
                  </div>
                </div>
              <div className='m-bd'>
                <div>{this.state.homePage.bottom.msg}</div>
                <Button>{this.state.homePage.bottom.contact}</Button>
              </div>
                
            </div>
            <div className='content'>
                  
                  <div className='cont'>
                    <div>{this.state.homePage.bottom.wx}</div>
                    <div>NAME：飘在东京</div>
                    <div>ID：wozaidongjing</div>
                    <img src={this.state.homePage.bottom.wxImg} alt="" width={120}/>
                  </div>
                  <div className='cont'>
                    <div>{this.state.homePage.bottom.wxPublic}</div>
                    <div>NAME：飘在东京</div>
                    <div>ID：yien_consult</div>
                    <img src={this.state.homePage.bottom.wxplatformImg}  alt="" width={120}/>
                  </div>
            </div>
           
            </div>
            <div className='n-bd'>
              <div className='nnn'></div>
              <div>{this.state.homePage.bottom.address}</div>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer;