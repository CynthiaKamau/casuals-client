import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getJobs } from "../../actions/items";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';import Card from "components/Card/Card.jsx";
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
};

const mapStateToProps = state => {
  return {
    data: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  }
}


function JobList({ data, getJobs }, props) {
  const { classes } = props;

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>

      {data.isLoading ? (
        <h2> Loading... </h2>
      ) : (
        <GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4>Job Opportunities</h4>
                <p>
                  Here is a subtitle for this table
                </p>
              </CardHeader>
              <CardBody>
            
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Preferance</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.items.map((list, index) => (
                        <TableRow key={index}>
                            <TableCell>{list.title}</TableCell>
                            <TableCell>{list.preferance}</TableCell>
                            <TableCell>{list.rating}</TableCell>
                            <TableCell>{list.location}</TableCell>
                            <TableCell><Button color="primary">View</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>

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
)(withStyles(styles)(JobList));
