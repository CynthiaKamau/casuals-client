import React, { useEffect} from "react";
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { getClient } from "../../actions/items";
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

const mapStateToProps = state => {
  return {
    data : state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClient: () => dispatch(getClient())
  }
}

function ClientProfile({ data, getClient}, props) {
  const { classes } = props;

  useEffect(() => {
    getClient();
  },[]);

  console.log("my client",data);

  return (
    <div>

      {data.isLoading && data.items.length === 0 ? (
        <h2> Loading... </h2>
      ) : (

        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4>Profile</h4>
                  <p>
                    Client Information
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>

                      <TextField
                        id="outlined-read-only-input"
                        label="Gender"
                        defaultValue={data.items[0].gender}
                        InputProps={{
                          readOnly: true,
                        }}
                      />

                      <TextField
                        id="outlined-read-only-input"
                        label="Status"
                        defaultValue={data.items[0].status}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                          id="outlined-read-only-input"
                          label="Location"
                          defaultValue={data.items[0].location}
                          InputProps={{
                            readOnly: true,
                          }}
                        />

                        <TextField
                          id="outlined-read-only-input"
                          label="Citizenship"
                          defaultValue={data.items[0].citizenship}
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
                <h6 >CEO / CO-FOUNDER</h6>
                <h4 >{data.items[0].user.first_name} {data.items[0].user.last_name}</h4>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ClientProfile));
