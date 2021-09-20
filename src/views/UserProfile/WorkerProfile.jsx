import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";

import { getWorker } from "../../actions/items";
// core components
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

export default function WorkerProfile({ data, getWorker }, props) {
  const { classes } = props;
  const [worker, setWorker] = React.useState("");

  useEffect(() => {

    const str = window.location.pathname;
    const id = str.slice(27, 1000);

    console.log("my id", id);

    axios.get(`/worker/${id}`).then(response => {
      console.log("my data", response.data.data)
      setWorker(response.data.data);
    })

  }, []);


  return (
    <div>

      {worker.length === 0 ? (
        <h2> Loading... </h2>
      ) : (

        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4>Profile</h4>
                <p>
                  Service Provider Information
                </p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>

                    <TextField
                      id="outlined-read-only-input"
                      label="Gender"
                      defaultValue={worker.gender}
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    <TextField
                      id="outlined-read-only-input"
                      label="Status"
                      defaultValue={worker.status}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <TextField
                      id="outlined-read-only-input"
                      label="Location"
                      defaultValue={worker.location}
                      InputProps={{
                        readOnly: true,
                      }}
                    />

                    <TextField
                      id="outlined-read-only-input"
                      label="Citizenship"
                      defaultValue={worker.citizenship}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button type="submit" color="primary">
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
                <h6 > Service Provider Information</h6>
                <h4 >{worker.user.first_name} {worker.user.last_name}</h4>
                <p >
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                {/* <Button color="primary" round>
                  Follow
                </Button> */}
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

      )

      }
    </div>
  );
}

