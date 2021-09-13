import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import { getClients} from "../../actions/items";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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
};


const mapStateToProps = state => {
  return {
    data: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getClients: () => dispatch(getClients())
  }
}


function clientsList({ data, getClients}, props) {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div>

      {data.isLoading ? (
        <h2> Loading... </h2>
      ) : (
        <GridContainer>
          {data.items && data.items.map(item => {
            return (
              <Grid container className={classes.root} justify={"center"} spacing={3}>
                <Grid item xs={4} key={item.key} display="inline" >

                  <Card className="card" key={item.id}>
                    <CardHeader color="primary"> {item.user.first_name} {item.user.last_name} </CardHeader>
                    <CardBody center>
                      <p> {item.username}</p>
                      <p> {item.gender}</p>
                      <p> {item.phone_number}</p>
                      <p> {item.address} </p>
                      <p> {item.status}</p>
                    </CardBody>
                    <CardFooter>
                    </CardFooter>

                  </Card>

                </Grid>
                
              </Grid>

            )
          })}
        </GridContainer>

      )
      }
    </div>

  )

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(clientsList));

