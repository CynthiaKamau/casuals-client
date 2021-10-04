import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import { getClients, getClient } from "../../actions/items";

// core components
import { useHistory } from "react-router-dom";

import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Loader from "react-loader-spinner";

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

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getClients: () => dispatch(getClients()),
//     handleClick: (id) => {dispatch(getClient(id))}
//   }
// }


function clientsList(props) {
  const { classes } = props;

  let dispatch = useDispatch();
  const { items } = useSelector(state => state.client)

  useEffect(() => {
    dispatch(getClients());
  }, []);

  let history = useHistory();

  const handleClick = (id) => e => {
    // dispatch(getClient(id));
    history.push(`/admin/client/id=${id}`);
  }

  return (
    <div>

      {items.length === 0 ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ) : (
        <GridContainer>
          <Card plain>
            <CardHeader plain color="primary">
              <h4 >Clients</h4>
            </CardHeader>

            <CardBody style={{ display: 'flex', flexWirection: 'wrap' }}>

              {items && items.length > 0 && items.map(item => {
                return (
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={10}>
                      <Card className="card" key={item.id} onClick={handleClick(item.user.id)}>
                        <CardHeader color="primary"> {item.user.first_name} {item.user.last_name} </CardHeader>
                        <CardBody center>
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

export default withStyles(styles)(clientsList);

