import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";

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
import { getJob } from "../../actions/items";

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

const JobDetails = (props) => {
  const { classes } = props;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date_added, setAddedDate] = React.useState("");
  const [validity, setValidity] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [preferance, setPreferance] = React.useState("");
  const [role, setRole] = React.useState("");
  const [first_name, setFname] = React.useState("");
  const [last_name, setLname] = React.useState("");
  const [showloader, setshowloader] = useState(false);
  const [id, setId] = React.useState("");
  const [job, setJob] = React.useState("");
  const { user: currentUser } = useSelector(state => state.auth);
  const { item } = useSelector(state => state.job);
  const dispatch = useDispatch();

  if (!currentUser) {
    return <Redirect to="/auth/login-page" />;
  }

  useEffect(() => {

    const str = window.location.pathname;
    const id = str.slice(22, 1000);

    dispatch(getJob(id));

  }, []);

  useEffect(() => {

    if(item) {
      console.log("my data", item);
      setJob(item);
      setTitle(item.title)
      setDescription(item.description)
      setAddedDate(item.date_added)
      setValidity(item.validity)
      setPreferance(item.preferance)
      // setRole(item.client.role.name)
      setLocation(item.location)
      //setCitizenship(item.citizenship)
      // setFname(item.client.first_name)
      // setLname(item.client.last_name)
      //setGender(item.gender)
      setId(item.id)
    }

  }, [item]);


  return (
    <div>

      {job.length === 0 ? (
        <GridItem style={{ textAlign: "center", marginTop: 10 }}>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
          />
        </GridItem>
      ) : (

        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Job Description</h4>
                <p className={classes.cardCategoryWhite}>
                  Job details
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Title"
                      id="first_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: title,
                        name: title,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setTitle(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Date Added"
                      id="date_added"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: date_added,
                        name: date_added,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setAddedDate(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Valid Till"
                      id="validity"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: validity,
                        name: validity,
                        type: "validity",
                        onchange: event => {
                          const value = event.target.value;
                          setValidity(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Description"
                      id="middle_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: description,
                        name: description,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setDescription(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Description"
                      id="middle_name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: preferance,
                        name: preferance,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setPreferance(value)
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Description"
                      id="location"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: location,
                        name: location,
                        type: "text",
                        onchange: event => {
                          const value = event.target.value;
                          setLocation(value)
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

export default withStyles(styles)(JobDetails);


