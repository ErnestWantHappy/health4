import com from '../../public/data'
import img5 from '../../public/img/5.jpg'
import img6 from '../../public/img/6.jpg'

const data = {
    ...com,
    title:"合作伙伴一览",
  list:[{
    img: img5,
    title:"日本外苑东体检中心",
    cnt:" 日本外苑东体检中心是日本最先进防癌检查机构，由宇野公一教授创立并担任院长。宇野教授作为“日本PET体检第一人”，采用独一无二的防癌检查技术可以发现和排除多种早初期癌症，确保您在未来远离癌症和重大疾病的风险。",
    btn: "跳转",
    link:"https://www.baidu.com",
    },{
    img: img6,
    title:"粒子线癌症治疗中心",
    cnt:"当前，癌症仍是影响身体健康的主要因素之一，人类正不断用科技进步的力量与之抗争。日立粒子线癌症治疗系统作为癌症治疗的“杀手锏”， 足迹遍布全球。",
    btn: "跳转",
    link:"https://www.baidu.com",
    }],
    line: true,
    btn:true
  };

  export default data