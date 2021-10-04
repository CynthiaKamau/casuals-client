import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getJobs, deleteJob, editJob } from "../../actions/items";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { useHistory } from "react-router-dom";
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
//     getJobs: () => dispatch(getJobs())
//   }
// }


function JobList(props) {
  const { classes } = props;

  const {user : currentUser} = useSelector(state => state.auth);

  let history = useHistory();
  let dispatch = useDispatch();
  const { items } = useSelector(state => state.job)

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  const handleVClick = (id) => e => {
    history.push(`/admin/job-details/id=${id}`);
  }

  const handleEClick = (id) => e => {
    history.push(`/admin/job-details/id=${id}`);
  }

  const handleDClick = (id) => e => {
    if(window.confirm("Are you sure you want to delete the job?")) {
      dispatch(deleteJob(id));
    }
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

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4>Job Opportunities</h4>
                <p>
                  Jobs available for service providers.
                </p>
              </CardHeader>
              <CardBody>
              <div><Button color="secondary" class="pull-right"> Add Job </Button> </div>

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
                      {items && items.map((list, index) => (
                        <TableRow key={index}>
                            <TableCell>{list.title}</TableCell>
                            <TableCell>{list.preferance}</TableCell>
                            <TableCell>{list.rating}</TableCell>
                            <TableCell>{list.location}</TableCell>
                            <TableCell><Button color="success" onClick={handleVClick(list.id)}>View</Button></TableCell>
                            <TableCell><Button color="primary" onClick={handleEClick(list.id)}>Edit</Button></TableCell>
                            <TableCell><Button color="danger" onClick={handleDClick(list.id)}>Delete</Button></TableCell>

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

export default withStyles(styles)(JobList);
