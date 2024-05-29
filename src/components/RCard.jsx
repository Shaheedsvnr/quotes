import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ data }) {
  return (
    <Card sx={{ width: 450, height: "15vh", m: "2px" }}>
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text" sx={{ textAlign: "center" }}>
            {data.quote}
          </Typography>
          <Typography
            gutterBottom
            variant="overline"
            component="h6"
            sx={{ float: "right" }}
          >
            - {data.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
