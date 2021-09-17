import React from "react";
import { connect} from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

import { register } from "../../actions/auth";
import { clearError } from "../../actions/error";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Face from "@material-ui/icons/Face";
import Phone from "@material-ui/icons/Phone";
import DoneIcon from '@material-ui/icons/Done';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import registerPageStyle from "assets/jss/material-dashboard-react/views/registerPageStyle.jsx";
class RegisterPage extends React.Component {
  
    state = {
      checked: [],
      errors: {},
      first_name : '',
      middle_name : '',
      last_name: '',
      username: '',
      email: '',
      phone_number: '',
      role_id: 2,
      status: true
    };

    static propTypes = {
      isAuthenticated : PropTypes.bool,
      error : PropTypes.object.isRequired,
      classes: PropTypes.object.isRequired,
      history: PropTypes.object,
      register: PropTypes.func.isRequired,
      clearError : PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
      const { error} = this.props;

      if(error !== prevProps.error) {
        if(error.id === 'REGISTER_FAIL') {
          this.setState({ message : error.message })
        } else {
          this.setState({ message : null})
        }

      }
    }

  handleFNameChange = e => {this.setState( { first_name: e.target.value}) }
  handleMNameChange = e => {this.setState( { middle_name: e.target.value}) }
  handleLNameChange = e => {this.setState( { last_name: e.target.value}) }
  handleEmailNameChange = e => {this.setState( { email: e.target.value}) }
  handlePnNameChange = e => {this.setState( { phone_number: e.target.value}) }
  handleUnNameChange = e => {this.setState( { username: e.target.value}) }
  handlePwNameChange = e => {this.setState( { password: e.target.value}) }

  register = async e => {
    e.preventDefault();

    this.props.clearError();

    const {first_name, middle_name, last_name, username, email, phone_number, role_id,status, password} = this.state;

    const newUser = {
      first_name,
      middle_name,
      last_name,
      username,
      email,
      phone_number,
      role_id,
      status,
      password
    }

    //attempt to register client
    this.props.register(newUser);

  };

  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };

  renderRedirect = () => {

    const { isAuthenticated } = this.props;

    if (isAuthenticated === true) {
      return (
        <Redirect
          to="/auth/login-page"
        />
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>

      {this.renderRedirect()}

        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={6}>
            <form onSubmit={this.register}>
              <Card className={classes[this.state.cardAnimaton]}>
                <CardHeader
                  className={`${classes.cardHeader} ${classes.textCenter}`}
                  color="primary"
                >
                  <h4 className={classes.cardTitle}>Register</h4>
                  <div className={classes.socialLine}>
                    {[
                      "fa fa-facebook-square",
                      "fa fa-twitter",
                      "fa fa-google-plus"
                    ].map((prop, key) => {
                      return (
                        <Button
                          color="transparent"
                          justIcon
                          key={key}
                          className={classes.customButtonClass}
                        >
                          <i className={prop} />
                        </Button>
                      );
                    })}
                  </div>
                </CardHeader>
                <CardBody>

                { this.state.message ? <SnackbarContent color="warning" message={this.state.message} close /> : null }
                
                  <CustomInput
                    labelText="First Name..."
                    id="first_name"                    
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "first_name",
                      value: this.state.first_name,
                      onChange :this.handleFNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Middle Name..."
                    id="middle_name"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      name: "middle_name",
                      value:this.state.middle_name,
                      onChange:this.handleMNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Last Name..."
                    id="last_name"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "last_name",
                      value:this.state.last_name,
                      onChange:this.handleLNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      type: "email",
                      name: "email",
                      value:this.state.email,
                      onChange:this.handleEmailNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Phone Number..."
                    id="phone_number"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "phone_number",
                      value:this.state.phone_number,
                      onChange:this.handlePnNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Phone className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />

                  <CustomInput
                    labelText="Username..."
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "username",
                      value:this.state.username,
                      onChange:this.handleUnNameChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <DoneIcon className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password..."
                    id="password"
                    formControlProps={{
                      fullWidth: true,
                      className: classes.formControlClassName
                    }}
                    inputProps={{
                      required: true,
                      name: "password",
                      type: "password",
                      value:this.state.password,
                      onChange:this.handlePwNameChange, 
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputAdornmentIcon}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      )
                    }}
                  />
                  <FormControlLabel
                    classes={{
                      root:
                        classes.checkboxLabelControl +
                        " " +
                        classes.checkboxLabelControlClassName,
                      label: classes.checkboxLabel
                    }}
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(1)}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        icon={<Check className={classes.uncheckedIcon} />}
                        required
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot
                        }}
                      />
                    }
                    label={
                      <span>
                        I agree with the <a href="#pablo">Privacy Policy</a>.
                      </span>
                    }
                  />
                </CardBody>
                <CardFooter className={classes.justifyContentCenter}>
                  <Button type="submit" color="primary" simple size="lg" block>
                    REGISTER
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated : state.auth.isAuthenticated,
  error : state.error.message
})

export default connect(
  mapStateToProps,
  { register, clearError}
)(withStyles(registerPageStyle)(RegisterPage));

