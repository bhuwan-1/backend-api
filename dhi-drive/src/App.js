import React from 'react'
import Wms_connection from './components/Wms_connection'
import Wms_map from './components/Wms_map'
import MapDiff from './components/Map/MapDiff'
import MyTable from './components/Table/MyTable'


import 'antd/dist/antd.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Wms_Table from './components/Wms_Table'


function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route path='/' exact component={Wms_connection}/>
              <Route path='/Water_map'  component={Wms_map}/>
              <Route path='/Table'  component={Wms_Table}/>
              <Route path='bhuwanMap' component={MapDiff}/>
              <Route path='/table' component={MyTable}/>
          </Switch>
        </div>
        {/* <MyTable /> */}
    </Router>
    
  );
}

export default App;
