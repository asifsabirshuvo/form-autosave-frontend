import * as React from "react";
import { Card, CardContent, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./ListItem.css";

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

function ListItem(props) {
  const classes = useStyles();
  return (
    <Link
      to={`/form/${props.id}`}
      style={{ color: "white", textDecoration: "none" }}
    >
      <Card
        className={classes.root}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default ListItem;
