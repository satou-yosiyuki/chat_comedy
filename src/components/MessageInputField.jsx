import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Grid } from "@material-ui/core";
import { gravatarPath } from "../gravatar";
import { MessageField } from "./MessageField";
import { useState } from "react";
import { MessageSubmitButton } from "./MessageSubmitButton";

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: "26px",
  },
});

export const MessageInputField = ({ name }) => {
  const [text, setText] = useState("");
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <MessageField setText={setText} text={text} name={name} />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton setText={setText} text={text} name={name} />
        </Grid>
      </Grid>
    </div>
  );
};
