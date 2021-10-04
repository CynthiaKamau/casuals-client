import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";

import { getclient } from "../../actions/items";
// core components
import Loader from "react-loader-spinner";
import TextField from '@material-ui/core/TextField';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

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

const ClientProfile = (props) => {
  const { classes } = props;
  const [client, setClient] = React.useState("");
  const [first_name, setFname] = React.useState("");
  const [middle_name, setMname] = React.useState("");
  const [last_name, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone_number, setPNumber] = React.useState("");
  const [role, setRole] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [citizenship, setCitizenship] = React.useState("");
  const [jobs, setJobs] = React.useState("");
  const [averageRating, setAverageRating] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [showloader, setshowloader] = useState(false);
  const [id, setId] = React.useState("");
  const { user: currentUser } = useSelector(state => state.auth);
  const { token } = useSelector(state => state.auth);

  if (!currentUser) {
    return <Redirect to="/auth/login-page" />;
  }

  useEffect(() => {

    const str = window.location.pathname;
    const id = str.slice(17, 1000);

    axios.get(`/api/client/${id}`, token).then(response => {
      console.log("my data", response.data.message)
      setClient(response.data.message);
      setFname(response.data.message.user.first_name)
      setMname(response.data.message.user.middle_name)
      setLName(response.data.message.user.last_name)
      setEmail(response.data.message.user.email)
      setPNumber(response.data.message.user.phone_number)
      setRole(response.data.message.user.role_id)
      setAddress(response.data.message.address)
      setCitizenship(response.data.message.citizenship)
      // setAverageRating()
      // setJobs(response.data.message.jobs.length)
      setGender(response.data.message.gender)
      setId(response.data.message.user.id)
    })

  }, []);


  return (
    <div>

      {client.length === 0 || client.isLoading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
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
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Address"
                      id="address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: address,
                        onchange: event => {
                          const value = event.target.value;
                          setAddress(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Citizenship"
                      id="citizenship"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: citizenship,
                        onchange: event => {
                          const value = event.target.value;
                          setCitizenship(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Gender"
                      id="gender"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: gender,
                        onchange: event => {
                          const value = event.target.value;
                          setGender(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Average Rating"
                      id="averageRating"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: averageRating,
                        disabled: true,
                        onchange: event => {
                          const value = event.target.value;
                          setAverageRating(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Jobs Done"
                      id="jobs"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: jobs,
                        disabled: true,
                        onchange: event => {
                          const value = event.target.value;
                          setJobs(value)
                        }
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                {/* <Button type="submit" color="primary" onClick={handleProfileUpdate}>
                  Update Profile
                </Button> */}
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
                <h6 className={classes.cardCategory}>{role}</h6>
                <h4 className={classes.cardTitle}>{first_name} {last_name}</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )

      }
    </div>
  );
}

export default withStyles(styles)(ClientProfile);


