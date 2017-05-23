import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress';

import '../App.css';
import { seedhero } from '../action'

class Content extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.seedhero()
  }
  render() {
  if(this.props.list_hero.length>0){
    return (
        <div className="App-content">
        <MuiThemeProvider>
        <Table >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow key={0}>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Range">Range</TableHeaderColumn>
              <TableHeaderColumn tooltip="Action">Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            { this.props.list_hero.map((hero) =>{
              return(
                  <TableRow key={hero.ID}>
                    <TableRowColumn >{hero.ID}</TableRowColumn>
                    <TableRowColumn>{hero.Name}</TableRowColumn>
                    <TableRowColumn>{hero.Range}</TableRowColumn>
                    <TableRowColumn>
                      <Link to={`/detail/${hero.ID}`}>DETAIL
                      </Link>
                    </TableRowColumn>
                  </TableRow>
              )
            })}
          </TableBody>
        </Table>
        </MuiThemeProvider>
        </div>
    )
  }else {
    return(
    <MuiThemeProvider>
          <CircularProgress size={80} thickness={5} />
          </MuiThemeProvider>
          )
  }

  }
}

const mapStateToProps = (state) => {
  // console.log('state',state.list_hero);
  return {
    list_hero: state.list_hero
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seedhero: () => {dispatch(seedhero())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);
