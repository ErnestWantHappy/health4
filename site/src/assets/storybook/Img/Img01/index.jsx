// import { Image, Tag } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';//prop代表父组件传递过来的值，types代表类型。简单来说就是用来校验父组件传递过来值的类型
import { Link } from "react-router-dom";
import './index.scss'
// import data from './data';

const Img01 = ({ data }) => {


  return (
    <div className="sc-Img01">
     
      <div className="m-bd">
        {data.list?.map((item, i) =>
          <div className="m-item" key={i}>
            {item?.img &&
              <div className="m-img">
                <Link to={item?.url&&item?.url}>
                  <img src={item?.img} alt="" />
                </Link>
              </div>
            }
            <div className='m-cnt'>
              <div className={`m-lab `}>
                <div className="m-ti">
                  {item?.title &&
                    <label>
                      {item?.title}
                    </label>
                  } 
                </div>
              </div>
              <div className='m-wd'>
                {item?.list && item.list.map((o, j) =>
                  <span key={j} >
                    {<label>·</label>} {o} <br />
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>


    </div>
  )
}

Img01.propTypes = {
  /** 背景色 */
  background: PropTypes.string,
  /** 文字色 */
  color: PropTypes.string,
  /** 标题文本 */
  title: PropTypes.string,
  /** 标题是否显示下划线 */
  line: PropTypes.bool,
  /** 数据内容 */
  list: PropTypes.array, 
  /** 是否显示序号 */
  id: PropTypes.bool
};

Img01.defaultProps = {
  background: '#fff',
  color:'#333',
  title: '标题',
  line: true,
  list: [],
  id: true
};

export default Img01