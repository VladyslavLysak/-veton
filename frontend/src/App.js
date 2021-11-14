import React from 'react'
import { Switch, Route } from 'react-router-dom'

import constants from 'Constants'

import Home from 'Pages/Home'
import ChooseDoctor from 'Pages/ChooseDoctor'
import DoctorPage from 'Pages/DoctorPage'
import NotFoundPage from 'Pages/NotFound'

import Sidebar from 'Components/Sidebar'
import Footer from 'Components/Footer'

import './App.scss'

import { Grid } from '@material-ui/core'

const App = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={constants.breakpoints.sidebar.xs}
        md={constants.breakpoints.sidebar.md}
        lg={constants.breakpoints.sidebar.lg}>
        <Sidebar />
      </Grid>
      <Grid
        item
        xs={constants.breakpoints.content.xs}
        md={constants.breakpoints.content.md}
        lg={constants.breakpoints.content.lg}>
        <div className='main-container'>
          <div className='content'>
            <Switch>
              <Route exact path={constants.routes.home} component={Home} />
              <Route
                exact
                path={constants.routes.choose}
                component={ChooseDoctor}
              />
              <Route exact path='/doctor/:id' component={DoctorPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default App
