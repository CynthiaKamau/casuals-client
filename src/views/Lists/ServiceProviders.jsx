import React , {useEffect} from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { getServiceProviders } from "../../actions/items";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  carditemWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

function ServiceProvidersList({data, getServiceProviders}, props) {
  const { classes } = props;
  
  useEffect(() => {
    getServiceProviders();
  }, []);

  return (
    <div>

      { data.isLoading ? (
        <h2> Loading... </h2>
        ) : (
          <GridContainer>
            <Grid xs={12} sm={12} md={12} direction="row" >
              <Card plain>
                <CardHeader plain color="primary">
                  <h4 >Material Design Icons</h4>
                  <p >
                    Handcrafted by our friends from{" "}
                    <a
                      href="https://design.google.com/icons/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google
                    </a>
                  </p>
                </CardHeader>

                <CardBody>

                    { data.items.rows && data.items.rows.map( item => {
                    return (
                      <Grid lg="6" xl="3" key={item.key} >

                        <Card className="card" key={item.id}>
                          <CardHeader color="primary"> {item.user.first_name} {item.user.last_name} </CardHeader>
                          <CardBody center>
                            <p> {item.gender}</p>
                            <p> {item.phone_number}</p>
                            <p> {item.address} </p>
                            <p> {item.status}</p>
                          </CardBody>
                        </Card> 
                      </Grid>
                      
                      )
                    })}

                  </CardBody>
              </Card>
            </Grid>
          </GridContainer>

        )
      }
    </div>
    
  )
}

const mapStateToProps = state => {
  return {
    data : state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getServiceProviders: () => dispatch(getServiceProviders())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ServiceProvidersList));
