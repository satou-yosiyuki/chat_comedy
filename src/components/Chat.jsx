import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MessageList } from "./MessageList";
import { MessageInputField } from "./MessgeInputField";

const useStyles = makeStyles({
  root: {
    display: "grid",
    height: "100vh",
    gridTemplateRows: "1fr auto",
  },
});

export const Chat = ({name}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name}/>
    </div>
  );
};
