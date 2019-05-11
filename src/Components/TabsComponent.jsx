import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SelectionControls from './SelectionControls';
import TitlebarGridList from './TitlebarGridList';
import AlertDialog from './AlertDialog';
import RecipeReviewCard from './RecipeReviewCard';
import ContainedButtons from './ContainedButtons';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsComponent extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { conteiner } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Gender" />
            <Tab label="Fotos" />
            <Tab label="Review" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><SelectionControls/><ContainedButtons/></TabContainer>}
        {value === 1 && <TabContainer><TitlebarGridList/> <AlertDialog/> </TabContainer>}
        {value === 2 && <TabContainer><RecipeReviewCard/></TabContainer>}
      </div>
    );
  }
}

TabsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsComponent);