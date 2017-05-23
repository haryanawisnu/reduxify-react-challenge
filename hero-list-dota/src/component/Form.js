import React from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'

const style = {
  marginLeft: 20,
};

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state={index:props.match-1}
  }
  render() {
    return (
        <div className="App-content">
        <MuiThemeProvider >
        <Paper key={this.props.list_hero[this.state.index].ID}  zDepth={2}>
          <TextField hintText="ID" floatingLabelText="ID" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].ID} />
          <Divider />
          <TextField hintText="Name" floatingLabelText="Name" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].Name}/>
          <Divider />
          <TextField hintText="Range" floatingLabelText="Range" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].Range}/>
          <Divider />
          <TextField hintText="Movespeed" floatingLabelText="Movespeed" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].Movespeed}/>
          <Divider />
          <TextField hintText="HP" floatingLabelText="HP" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].HP}/>
          <Divider />
          <TextField hintText="HPRegen" floatingLabelText="HPRegen" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].HPRegen}/>
          <Divider />
          <TextField hintText="Mana" floatingLabelText="Mana" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].Mana}/>
          <Divider />
          <TextField hintText="ManaRegen" floatingLabelText="ManaRegen" style={style} underlineShow={false} value={this.props.list_hero[this.state.index].ManaRegen}/>
          <Divider />
        </Paper>
        </MuiThemeProvider>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list_hero: state.list_hero
  }
}

export default connect(mapStateToProps,null)(Form);
