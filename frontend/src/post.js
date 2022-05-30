import { useState, useEffect } from "react";
import * as React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Grid,
} from "@mui/material";

function Post({ username, content }) {
  return (
    <>
      <div>
        <ListItem alignItems="center">
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "10vh" }}
          >
            <ListItemText
              primary={username}
              secondary={<React.Fragment>{content}</React.Fragment>}
            />
          </Grid>
        </ListItem>
        <Divider component="li" />
      </div>
    </>
  );
}

export default Post;
