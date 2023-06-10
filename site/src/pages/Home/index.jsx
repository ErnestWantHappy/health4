import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import Carousel from "../../assets/storybook/Part/Carousel";
import Img01 from "@/assets/storybook/Img/Img01";
import Img02 from "@/assets/storybook/Img/Img02";
// import { Timeline } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
//navigation是swiper两边的按钮
import { Navigation, Pagination,Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from './1.jpg';
import img2 from './2.jpg';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.mainStore;
    this.state = {
      homePage: {},
      data1: {},
      data2: {},
      data3: {},
      msg1: "aha",
    };
  }
  //生命周期函数，在render之前执行
  componentWillMount() {
    this.setState({
      homePage: this.props.homePage,
      data1: this.props.dataImg1,
      data2: this.props.dataImg2,
      data3: this.props.dataImg3,
    });
  }

  //生命周期函数在组件挂载后（插入 DOM 树中）立即调用。render之后
  componentDidMount = async (e) => {};

  //组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
  componentWillUpdate() {
    setTimeout(() => {
      this.setState({
        homePage: this.props.homePage,
        data1: this.props.dataImg1,
        data2: this.props.dataImg2,
        data3: this.props.dataImg3,
      });
    }, 500);
  }

  render() {
    return (
      this.state.homePage.timeLine && (
        <div className="home">
          <div className="bigImg">
            <Carousel></Carousel>
          </div>
          <div className="bigContent">
            <div className="title">热门项目</div>
            <table className="content">
              <tr>
                <td>
                  <div className="content-img">
                    <img src={this.state.data1.list[0].img} alt="" />
                    <div className="box">
                      <Link to={"/Article"}><div className="box-title">{this.state.data1.list[0].title}</div></Link>
                      <ul className="box-ul">
                      {this.state.data1.list[0]?.list && this.state.data1.list[0].list.map((o, j) =>
                        <li key={j}>{o}</li>
                      )}
                      </ul>
                    </div>
                  </div>
                </td>
                <td>
                <div className="content-img">
                    <img src={this.state.data2.list[0].img} alt="" />
                    <div className="box">
                      <Link to={"/Article"}><div className="box-title">{this.state.data2.list[0].title}</div></Link>
                      <ul className="box-ul">
                      {this.state.data2.list[0]?.list && this.state.data2.list[0].list.map((o, j) =>
                        <li key={j}>{o}</li>
                      )}
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                <div className="content-img">
                    <img src={this.state.data3.list[0].img} alt="" />
                    <div className="box">
                      <Link to={"/Article"}><div className="box-title">{this.state.data3.list[0].title}</div></Link>
                      <ul className="box-ul">
                      {this.state.data3.list[0]?.list && this.state.data3.list[0].list.map((o, j) =>
                        <li key={j}>{o}</li>
                      )}
                      </ul>
                    </div>
                  </div>
                </td>
                <td>
                <div className="content-img">
                    <img src={img2} alt="" />
                    <div className="box">
                      <Link to={"/Article"}><div className="box-title">海外医疗</div></Link>
                      <ul className="box-ul">
                        <li>医疗无国界</li>
                        <li>解决交通问题 —— 接送机服务</li>
                        <li>解决语言不通 —— 配备一对一翻译</li>
                        <li>世界范围内的医疗资源触手可及</li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          {/* <div className="timeLine">
            <div className="t-ti">体检申请流程</div>
            <Timeline className="Line">
              {this.state.homePage.timeLine.map((item, index) => {
                return (
                  <Timeline.Item key={index} className="line1">
                    {item}
                  </Timeline.Item>
                );
              })}
            </Timeline>
          </div> */}
          <div className="bigProgress">
          <div className="p-ti">
            <div>{this.state.homePage.navigation&&this.state.homePage.navigation[3]}</div>
            <div>
            <Link to={"/Article"}>PICK UP ! 一覧</Link>
            </div>
          </div>
          <div className="SW">
            {/* slidesPerView同时显示三个  spaceBetween是slide之间的距离*/}
            <Swiper
            style={{
              // "--swiper-navigation-color": "#fff",
            }}
              slidesPerView={3}
              spaceBetween={35}
              loopFillGroupWithBlank={true}
              modules={[Navigation, Pagination,Scrollbar]}
              scrollbar={{ draggable: true }}
              // pagination={{ clickable: true }}
              // navigation={{
              //   nextEl: '.swiper-button-next',
              //   prevEl: '.swiper-button-prev',
              //   disabledClass: 'disable' // 当导航按钮变为不可用时添加的class,也就是当swiper索引为0时上一张没有prevEl的class类名就会添加一个disable，也就是.swiper-button-prev .disable
              // }}
              pagination={{ 
                bulletClass: 'swiper-pagination-bullet zlz',
                bulletActiveClass: 'swiper-pagination-bullet-active zlz-active',
                clickable: true,
               }}
              className="mySwiper"
            >
              {this.state.homePage.timeLine.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
                    <img src={item.img} alt="" />
                    </div>
                    <div>{item.content}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
          </div>
          </div>
          <div className="partner">
            <div>
              <Img02 data={this.state.homePage.partner&&this.state.homePage.partner}></Img02>
            </div>
          </div>
        </div>
      )
    );
  }
}
export default Home;
