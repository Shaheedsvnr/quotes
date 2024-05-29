import axios from "axios";
import React from "react";
import { useEffect } from "react";
import RecipeReviewCard from "./RCard";
import { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import RefreshIcon from "@mui/icons-material/Refresh";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));
export default function Reciepi({
  setState,
  miniLoading,
  state,
  random,
  search,
  data,
  loading,
  setLoading,
}) {
  // console.log(state);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        flexWrap: "wrap",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          p: 5,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            p: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DemoPaper
            sx={{
              width: "80%",
              height: "auto",
              p: 1,
            }}
            square={false}
          >
            <Typography
              variant=""
              color="text.secondary"
              sx={{
                textAlign: "center",
                fontWeight: "bolder",
                width: "100%",
                mb: 1,
              }}
            >
              Quote of the Day
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              color="text"
              sx={{
                textAlign: "center",
                fontWeight: "bolder",
                width: "100%",
                mt: 2,
              }}
            >
              {random?.quote}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                float: "right",
                fontWeight: "bolder",
                width: "100%",
                mt: 2,
              }}
            >
              - by {random?.author}
            </Typography>
            <Box>
              {miniLoading ? (
                <Box>
                  <CircularProgress
                    sx={{ float: "right" }}
                    color="secondary"
                    size={30}
                  />
                </Box>
              ) : (
                <Tooltip arrow title="Click to refresh">
                  <Button
                    onClick={() => setState(!state)}
                    color="secondary"
                    sx={{ float: "right" }}
                  >
                    <RefreshIcon />
                  </Button>
                </Tooltip>
              )}
            </Box>
          </DemoPaper>
        </Stack>
        {/* <Box
          sx={{
            backgroundColor: "#60141478",
            p: 1,
            width: "40%",
            border: "1px solid black",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "7px 5px 5px #00000082",
          }}
        ></Box> */}
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <RecipeReviewCard index={index} key={index} data={item} />
          ))
        ) : (
          <Box
            sx={{
              padding: 2,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                //   backgroundColor: "yellow",
                padding: 5,
                width: "50%",
                textAlign: "center",
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  fontFamily={"Poppins"}
                  fontSize={20}
                >
                  Oops
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  fontFamily={"Poppins"}
                  fontSize={16}
                >
                  We could not understand what you mean, try rephrasing the
                  query
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
