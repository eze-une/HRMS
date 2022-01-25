import { Button, Card, CardActionArea, CardContent, Container, FormControlLabel, FormLabel, makeStyles, MenuItem, Radio, RadioGroup, Snackbar, TextField, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        width: "30%",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        marginTop: theme.spacing(3),
        padding: theme.spacing(3),
        "-webkit-box-shadow": "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
          boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"
      },
      content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
      },
      form: {
        padding: theme.spacing(3),
      },
      Item: {
        marginBottom: theme.spacing(3),
      },
      title: {
        color: theme.palette.primary.main,
      },
}))

export default function EmployeeTrainingPage() {
    const classes = useStyles();

  return (
    <Card className={classes.container}>
        <CardContent className={classes.content}>
        <Typography variant="h4" className={classes.title}>
          Training Form
        </Typography>
        <form className={classes.form} autocomplete="off">
            <div className={classes.Item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="sm"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.Item}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                variant="outlined"
                defaultValue="Training is about ... "
                size="sm"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.Item}>
              <TextField select label="Vanue" value="Public">
                <MenuItem value="Public">Inside the company</MenuItem>
                <MenuItem value="Private">Outside the company</MenuItem>
                <MenuItem value="Unlisted">Unstated</MenuItem>
              </TextField>
            </div>
            {/* <div className={classes.Item}>
               <MobileDatePicker
          label="Date mobile"
          inputFormat="MM/dd/yyyy"
          value={value}
          renderInput={(params) => <TextField {...params} />}
        />
            </div> */}
            <div className={classes.Item}>
              <FormLabel component="legend">Do you have a team?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Yes"
                  control={<Radio size="small" />}
                  label="Yes"
                />
                <FormControlLabel
                  value="No"
                  control={<Radio size="small" />}
                  label="No"
                />
                <FormControlLabel
                  value="Unnessery"
                  disabled
                  control={<Radio size="small" />}
                  label="Unnessery"
                />
              </RadioGroup>
            </div>
            <CardActionArea className={classes.Item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </CardActionArea>
          </form>
        </CardContent>
    </Card>
  )
}
