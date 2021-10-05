import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import moment from 'moment';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Loader from "react-loader-spinner";
import swal from "sweetalert2";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { editJob, getJob } from "../../actions/items";

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

const changeJob = (props) => {

    const { classes } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [date_added, setDate] = React.useState("");
    const [validity, setValidity] = React.useState("");
    const [preferance, setPreferance] = React.useState("");
    const [status, setStatus] = React.useState("");
    const [rating, setRating] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [showloader, setshowloader] = useState(false);
    const [id, setId] = React.useState("");
    const [job, setJob] = React.useState("");
    const [client_id, setClientId] = React.useState("");
    const { user: currentUser } = useSelector(state => state.auth);
    const { item, error } = useSelector(state => state.job);


    if (!currentUser) {
        return <Redirect to="/auth/login-page" />;
    }

    useEffect(() => {

        const str = window.location.pathname;
        const id = str.slice(19, 1000);

        dispatch(getJob(id));

    }, []);

    var date = new Date();

    useEffect(() => {
        if (item) {
            setJob(item);
            setTitle(item.title)
            setDescription(item.description)
            setDate(item.date_added)
            setValidity(item.validity)
            setPreferance(item.preferance)
            setLocation(item.location)
            setId(item.id)
            setClientId(item.client_id)
            setStatus(true);
            setRating('0');
            setDate(moment(date).format('YYYY-MM-DD HH:MM:SS'));
        }
    }, [item]);


    const handleJob = e => {
        e.preventDefault();

        setshowloader(true);

        if (title === '', description === '', date_added === '', validity === '', preferance === '', location === '') {
            setshowloader(false);
            swal.fire({
                title: "Error",
                text: "Please fill all the required fields!",
                icon: "error",
                dangerMode: true
            });
        } else {

            dispatch(editJob(id, client_id, title, description, date_added, validity, preferance, location, rating, status))
            if (item === null) {
                setshowloader(false);
                swal.fire({
                    title: "Error",
                    text: "An error occured, please try again",
                    icon: "error",
                    dangerMode: true
                });
            } else {
                setshowloader(false);
                swal.fire({
                    title: "Thank You",
                    text: "You have successfully updated your job.",
                    icon: "success",
                    dangerMode: true,
                    confirmButtonColor: '#3085d6',
                })
                    .then((result) => {
                        if (result.isConfirmed) {
                            history.push('/admin/jobs');
                        } else {
                            history.push('/admin/jobs');
                        }
                    })
            }
        }

    };


    return (
        <div>
            {showloader === true || job.length === 0 ? (
                <GridItem style={{ textAlign: "center", marginTop: 10 }}>
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={150}
                        width={150}
                    />
                </GridItem>
            ) : (
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Edit Job</h4>
                                <p className={classes.cardCategoryWhite}>
                                    Edit Job Details
                                </p>
                            </CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Title"
                                            id="title"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                value: title,
                                                onChange: event => {
                                                    const value = event.target.value;
                                                    setTitle(value)
                                                }
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={4}>
                                        <CustomInput
                                            labelText="Date Added"
                                            id="date_added"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                required: true,
                                                defaultValue: date_added,
                                                disabled: true,
                                                value: date_added,
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
                                                type: "date",
                                                value: validity,
                                                onChange: event => {
                                                    const value = event.target.value;
                                                    setValidity(value)
                                                }
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Preferance"
                                            id="preferance"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                value: preferance,
                                                onChange: event => {
                                                    const value = event.target.value;
                                                    setPreferance(value)
                                                }
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <CustomInput
                                            labelText="Location"
                                            id="location"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                value: location,
                                                onChange: event => {
                                                    const value = event.target.value;
                                                    setLocation(value)
                                                }
                                            }}
                                        />
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <CustomInput
                                            labelText="Description"
                                            id="description"
                                            formControlProps={{
                                                fullWidth: true
                                            }}
                                            inputProps={{
                                                type: "text",
                                                rows: "3",
                                                value: description,
                                                onChange: event => {
                                                    const value = event.target.value;
                                                    setDescription(value)
                                                }
                                            }}
                                        />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" color="primary" onClick={handleJob}>
                                    Save
                                </Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            )}
        </div>
    );
}

export default withStyles(styles)(changeJob);
