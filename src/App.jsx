import Layout from 'antd/lib/layout/layout';
import {Sidebar,HeaderPage, ContentPage} from './components'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './App.css'
import { Home } from './page/Home';
import { Login } from './page/Login';
import { Minster } from "./page/Minster";


function App() {

  const [collapsed, setCollapsed] = useState(false)

  const handleTrigger = () => {
    setCollapsed(!collapsed)
  }
  const home = <Layout className='app'>
                  <Router>
                    <Sidebar collapsed={collapsed}/>
                    <Layout className="site-layout">
                      <HeaderPage handleTrigger={handleTrigger} collapsed={collapsed}/>
                      <ContentPage>
                          <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/minister'  component={Minster} />
                             {/*<Route path='/consalting' component={Consalting}/>*/}
                          </Switch>
                      </ContentPage>
                    </Layout>
                  </Router>
                </Layout>
  return (
    <>
      {true ? home : <Login/>}
    </>
  );
}

export default App;
