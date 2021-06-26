import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '25ch',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [comedy, setComedy] = React.useState("");
  const [style, setStyle] = React.useState("");
  const handleChange = (event) => {
    setComedy(event.target.value);
  };
  const handleChange2 = (event) => {
    setStyle(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          ボケツッコミ
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={comedy}
          onChange={handleChange}
        >
          <MenuItem value={"ボケ"}>ボケ</MenuItem>
          <MenuItem value={"ツッコミ"}>ツッコミ</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">
          漫才・コント
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={style}
          onChange={handleChange2}
        >
          <MenuItem value={"漫才"}>漫才</MenuItem>
          <MenuItem value={"コント"}>コント</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
