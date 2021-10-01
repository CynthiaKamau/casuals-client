import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import { getWorker, getServiceProviders } from "../../actions/items";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
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
}

const mapStateToProps = state => {
  return {
    data: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getServiceProviders: () => dispatch(getServiceProviders()),
  }
}


function ServiceProvidersList({ data, getServiceProviders }, props) {
  const { classes } = props;
  const dispatch = useDispatch();

  let history = useHistory();

  useEffect(() => {
    getServiceProviders();
  }, []);

  const handleClick = (id) => e => {
    console.log("here", id);
    history.push(`/admin/service-provider/id=${id}`);
  }

  return (
    <div>

      {data.isLoading || data.length === 0 ? (
        <h2> Loading... </h2>
      ) : (
        <GridContainer>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 >Service Providers</h4>
            </CardHeader>

            <CardBody style={{ display: 'flex', flexWirection: 'wrap' }}>

              {data.items && data.items.length > 0 && data.items.map(item => {
                return (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={10}>
                      <Card className="card" key={item.id} onClick={handleClick(item.user.id), dispatch(getWorker(item.user.id))}>
                        <CardHeader color="primary"> {item.user.first_name} {item.user.last_name} </CardHeader>
                        <CardBody center >
                          <p> {item.username}</p>
                          <p> {item.gender}</p>
                          <p> {item.phone_number}</p>
                          <p> {item.address} </p>
                          <p> {item.status}</p>
                        </CardBody>
                      </Card>
                    </Grid>
                  </Grid>
                )
              })}

            </CardBody>
          </Card>
        </GridContainer>

      )
      }
    </div>

  )

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ServiceProvidersList));

