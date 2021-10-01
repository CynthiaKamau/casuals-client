import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Loader from "react-loader-spinner";
import swal from "sweetalert2";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { update_profile } from "../../actions/auth";


import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const updateProfile = (props) => {

  const { classes } = props;
  const dispatch = useDispatch();

  const [first_name, setFname] = React.useState("");
  const [middle_name, setMname] = React.useState("");
  const [last_name, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone_number, setPNumber] = React.useState("");
  const [role, setRole] = React.useState("");
  const [showloader, setshowloader] = useState(false);
  const [id, setId] = React.useState("");


  const { user: currentUser } = useSelector(state => state.auth);

  if (!currentUser) {
    return <Redirect to="/auth/login-page" />;
  }

  useEffect(() => {
    setFname(currentUser.first_name)
    setMname(currentUser.middle_name)
    setLName(currentUser.last_name)
    setEmail(currentUser.email)
    setPNumber(currentUser.phone_number)
    setRole(currentUser.role.name)
    setId(currentUser.id)
  }, []);

  const handleProfileUpdate = e => {
    setshowloader(true);

    dispatch(update_profile(id, first_name, middle_name, last_name, phone_number, email))
      .then(response => {
        console.log("response", response);

        setshowloader(false);

        swal({
          title: "Thank You",
          text: "You have successfully updated your account.",
          icon: "success",
          dangerMode: true
        })
          .then(willDelete => {
            window.location.reload();
            setFname(currentUser.first_name);
            setMname(currentUser.middle_name);
            setLName(currentUser.last_name);
            setEmail(currentUser.email);
            setPNumber(currentUser.phone_number);
            setRole(currentUser.role.name);
            setId(currentUser.id);
          })
          .catch(error => {
            setshowloader(false);
            console.log(error);
          });
      })
      .catch(error => {
        setshowloader(false);

        swal({
          title: "Error",
          text: "An error occured, please try again",
          icon: "error",
          dangerMode: true
        });

        console.log("error", error);
      });
  };


  return (
    <div>
      {currentUser === null ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>
                  Complete your profile
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="First Name"
                      id="first_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: first_name,
                        name: first_name,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setFname(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Middle Name"
                      id="middle_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: middle_name,
                        name: middle_name,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setMname(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Last Name"
                      id="last_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: last_name,
                        name: last_name,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setLName(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: email,
                        name: email,
                        type: "email",
                        onchange: event => {
                          const value = event.target.value;
                          setEmail(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Phone Number"
                      id="phone_number"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: phone_number,
                        name: phone_number,
                        type: "number",
                        onchange: event => {
                          const value = event.target.value;
                          setPNumber(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Role"
                      id="role"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: role,
                        disabled: true,
                        onchange: event => {
                          const value = event.target.value;
                          setRole(value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary" onClick={handleProfileUpdate}>
                  Update Profile
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>{currentUser.role.name}</h6>
                <h4 className={classes.cardTitle}>{currentUser.first_name} {currentUser.last_name}</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )}
    </div>
  );
}

export default withStyles(styles)(updateProfile);
