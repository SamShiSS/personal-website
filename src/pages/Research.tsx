import { Box, List, ListItem, Typography } from "@mui/material";

function Research() {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Typography>
        I began my journey as a research student in the senior year of undergrad
        during which time I explored my interests in biomedical engineering
        through volunteering/working in several different research laboratories.
        My most significant experience came during my years as a master’s
        student working at the PROPEL lab in the Bloorview Research Institute.
        Under the mentorship of Dr. Jan Andrysek and Dr. Matt Leineweber, I
        completed a thesis focused on developing a vibration feedback system for
        assisting lower-limb amputees to control their prostheses. My research
        experience taught me not just the science and research methodology. More
        importantly, I gained transferable skills for my future career, such as
        self-directing a project, dealing with ambiguity, making sound
        decisions, collaborating with others, and communicating my work through
        writing and oral presentations.
      </Typography>
      <img src="bri_research_symposium.jpg" width="450px" />
      <Typography variant="h6">Peer-Reviewed Journal Publications</Typography>
      <Typography variant="body2">
        Shi, S., Leineweber, M. J., and Andrysek, J., 2018, “Exploring the
        Tactor Configurations of Vibrotactile Feedback Systems for Use in
        Lower-Limb Prostheses,” Journal of Vibration and Acoustics. (Submitted
        in June 2018) Leineweber, M. J., Shi, S., and Andrysek, J., 2016, “A
        Method for Evaluating Timeliness and Accuracy of Volitional Motor
        Responses to Vibrotactile Stimuli,” Journal of Visualized Experiments,
        (114), pp. 1–7. (link)
      </Typography>
      <Typography variant="h6">Peer-Reviewed Conference Proceedings</Typography>
      <Typography variant="body2">
        Shi, S., Leineweber, M. J., and Andrysek, J., 2018, “Examination of
        Tactor Configurations for the Design of Vibrotactile Feedback Systems
        for Use in Lower-limb Prostheses,” ASME 2018 International Design
        Engineering Technical Conferences & Computers and Information in
        Engineering Conference (IDETC/CIE 2018), Quebec City, QC. (link)
      </Typography>
      <Typography variant="h6">Awards/Scholarships</Typography>
      <List>
        <ListItem>
          2016-17 Kimel Family Graduate Student Scholarship in Paediatric
          Rehabilitation ($20,000)
        </ListItem>
        <ListItem>
          2015 Summer Undergraduate Research in Engineering (SURE) Award
          ($5,625)
        </ListItem>
      </List>
    </Box>
  );
}

export default Research;
