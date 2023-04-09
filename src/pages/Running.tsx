import { Box, Grid, List, ListItem, Typography } from "@mui/material";

function Running() {
  return (
    <Box>
      <Typography>
        I am a competitive amateur distance runner. Since I raced my first half
        marathon in 2013, I have been an active member of the running community,
        and racing several times a year in distances of 5k to marathon. I plan
        to continue competing in road races over the next 10-15 years, during
        which time I aim to train and race to my potential while leveraging both
        the health and the social benefits of running. I like to surround myself
        with a group of like-minded individuals who inspire and support me while
        I pursue my goals. In the summer of 2016, I joined The Black Lungs, a
        competitive distance running club based in Toronto. I hope to take my
        training/racing to the next level, and eventually break 2:40 in the
        marathon distance. I run almost every day, with a weekly mileage of
        90-130km during training season and 70-90km during off-season. You can
        follow my training on Strava.
      </Typography>

      <Box display="flex" justifyContent="space-between">
        <Grid>
          <Typography variant="h6">Personal Bests:</Typography>
          <List>
            <ListItem>
              5k: 17:31 (St. Patrick’s Day 5K, Toronto, ON, March 2016)
            </ListItem>
            <ListItem>
              10k: 38:21 (Tannenbaum 10k, Toronto, ON, December 2014){" "}
            </ListItem>
            <ListItem>
              Half Marathon: 1:19:00 (Chilly Half, Burlington, ON, March 2016)
            </ListItem>
            <ListItem>
              Marathon: 2:48:45 (Ottawa Marathon, Ottawa, ON, May 2015)
            </ListItem>
          </List>
          <Typography variant="h6">Current Goals:</Typography>
          <List>
            <ListItem> 5k: sub 17:00 </ListItem>
            <ListItem> 10k: sub 36:00 </ListItem>
            <ListItem> Half Marathon: sub 1:17</ListItem>
            <ListItem> Marathon: sub 2:45</ListItem>
          </List>
        </Grid>
        <iframe
          height="454"
          width="300"
          frameBorder="0"
          scrolling="yes"
          src="https://www.strava.com/athletes/7122826/latest-rides/67eaa6fa77c9d43a9b5a768c0f722220102f5139"
        ></iframe>
      </Box>
    </Box>
  );
}

export default Running;
