import { HistoryRouter, history } from './utils/history'
import { Route, Routes } from 'react-router-dom'
import { Layout, Login, Home } from '@/pages'
import Article from './assets/storybook/Part/Article'
import React from 'react'


class App extends React.Component{

  constructor(props) {
    super(props);
    this.store = props.mainStore
  }


  
  

render(){
  return(
    //HistoryRouter替换BrowserRouter
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* 配置嵌套路由*/}
            {/* 二级路由默认页面 */}

            {<Route path="article" element={<Article />} />}
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </HistoryRouter>
  )
}
  
}

export default App
