import Reciepi from "./Quotes";
import { Box, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
export default function API() {
  const [rcp, setRcp] = useState([]);
  const [random, setRandom] = useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(null);
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [miniLoading, setMiniLoading] = useState(false);

  const handleChange = (event) => {
    setLoading(true);
    setTimeout(() => {
      setSearch(event.target.value);
      setLoading(false);
    }, 1000);
  };
  const handleSearch = (e) => {
    setLoading(true);
    setTimeout(() => {
      setSearch(e.target.value);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/quotes?limit=30")
      .then(async (res) => {
        console.log(res.data.quotes);
        await setRcp(res.data.quotes);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setMiniLoading(true);
    axios
      .get("https://dummyjson.com/quotes/random")
      .then(async (res) => {
        console.log(res.data);
        setRandom(res.data);
        setTimeout(() => {
          setMiniLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state]);

  return (
    <div
      style={{
        backgroundColor: "#c07b9936",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? (
        <CircularProgress size={100} color="secondary" />
      ) : (
        <Reciepi
          loading={loading}
          miniLoading={miniLoading}
          setLoading={setLoading}
          data={rcp}
          setData={setRcp}
          search={search}
          random={random}
          state={state}
          setState={setState}
        />
      )}
    </div>
  );
}
