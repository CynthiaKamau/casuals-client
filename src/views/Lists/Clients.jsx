import React , {useEffect} from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "react-redux";
import { getClients } from "../../actions/items";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { useState } from "react";
import { TableBody, TableCell, TableRow, TableHead } from "@material-ui/core";

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

function ClientList({data, getClients}, props) {
  const { classes } = props;
  
  useEffect(() => {
    getClients();
  }, []);

  return data.isLoading ? (
    <h2> Loading... </h2>
  ) : (
    <div xs={12} sm={12} md={12} lg={12} justify="center" style={{display: 'flex',flexWrap: "wrap", background:"#E5E5E5"}}>
          
      <Table >
        <TableHead>
          <TableRow>ID</TableRow>
          <TableRow>Name</TableRow>
          <TableRow>Location</TableRow>
          <TableRow>Gender</TableRow>
          <TableRow>Status</TableRow>

        </TableHead>

        <TableBody>
          {/* {data.items.rows.map((item, index) => (
              <TableRow data-index={index}>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.gender}</TableCell>
              </TableRow>
          ))} */}
          
        </TableBody>
        
      </Table>
        
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data : state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getClients: () => dispatch(getClients())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ClientList));
