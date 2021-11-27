import * as React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./formComponent.css";

const useStyles = makeStyles({
  root: {
    marging: "0 auto",
    textAlign: "center",
    margin: "10px 50px",
  },
  media: {
    height: 140,
  },
});

function FormComponent({ title, key }) {
  const classes = useStyles();
  return (
    <Card
      key={key}
      className={classes.root}
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FormComponent;
