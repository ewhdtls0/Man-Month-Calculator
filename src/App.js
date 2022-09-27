/* eslint-disable no-unused-vars */
import { Button, Container, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./App.css";

/** The Man / Month Calcultor */
function App() {

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const handleOnchange = (e) => {

    const {value} = e.target;
    const numberValue = value.replace(/[^0-9]/g, '');
    let id = e.target.id;

    if(id === "select-day") {
      setDay(numberValue);
    }

    if(id === "select-hour") {
      setHour(numberValue);
    }

    if(id === "select-minute") {
      setMinute(numberValue);
    }

    if(id === "select-second") {
      setSecond(numberValue);
    }

  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter") {
      handleOnClick(e);
    }
  }

  const handleOnfocus = (e) => {
    e.target.select();

  }

  const handleOnClick = (e) => {
    // 10분에 4320 맨먼스
    // 1분에 43200 맨먼스
    // 1초에 43200 * 60 맨먼스
    let 분모 = 43200 * 60;

    let manMonth = (day * 3600 * 24 / 분모) + (hour * 3600 / 분모 ) + (minute * 60 / 분모) + (second / 분모);

    alert(manMonth + " 맨먼스 입니다.");
  }

  return (
    <Container className="container">
      <Grid container xs={12}>

      <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="day-select-label">Day</InputLabel>
            <Input className="select-form"
              labelId="hour-select-label"
              id="select-day"
              value={day}
              label="Day"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="hour-select-label">Hour</InputLabel>
            <Input className="select-form"
              labelId="hour-select-label"
              id="select-hour"
              value={hour}
              label="Hour"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="minute-select-label">Minute</InputLabel>
            <Input className="select-form"
              labelId="minute-select-label"
              id="select-minute"
              value={minute}
              label="Minute"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl className="form-control">
            <InputLabel id="second-select-label">Second</InputLabel>
            <Input className="select-form"
              labelId="second-select-label"
              id="select-second"
              value={second}
              label="Second"
              onChange={handleOnchange}
              onFocus={handleOnfocus}
              onKeyDown={handleKeyDown}
            >
            </Input>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleOnClick}>몇 맨먼스 !?</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
