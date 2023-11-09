import { Avatar, Badge, Box, Typography, Button } from "@mui/material";
import Footer from "../User_Components/Footer/Footer";

export default function TutorProfile() {
  const box = {
    width: "85vw",
  };
  return (
    <Box>
      <Box>
        <Box
          component={"div"}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "6%",
          }}
        >
          <Badge badgeContent={"New"} color="primary">
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                height: "40vh",
                width: "20vw",
                boxShadow: "0 10px 10px var(--cream)",
              }}
            ></Avatar>
          </Badge>
        </Box>
        <Box>
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              marginTop: "1%",
              textShadow: "0 10px 10px var(--cream)",
              fontFamily: "poppins",
            }}
          >
            Sonam Sharma
          </Typography>
          <Typography
            variant="h6"
            style={{
              textAlign: "center",
              marginTop: "0.5%",
              textShadow: "0 10px 10px var(--cream)",
              fontFamily: "poppins",
            }}
          >
            Offer Online Services
          </Typography>
        </Box>
        <Box
          component={"div"}
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <Box
            component={"div"}
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "45vw",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                marginTop: "1%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                marginTop: "1%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
              }}
            >
              Details
            </Typography>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                marginTop: "1%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
              }}
            >
              Reviews
            </Typography>
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                marginTop: "1%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
              }}
            >
              Services
            </Typography>
          </Box>
        </Box>
        {/* About */}
        <Box component={"div"} >
          <Box style={box}>
            <Typography
              variant="h5"
              style={{
                marginTop: "4%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
                color: "green",
              }}
            >
              About
            </Typography>
            <Typography
              variant="body1"
              style={{
                marginTop: "1%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
              }}
            >
              I am a Cornell graduate looking to tutor children of all ages in
              the sciences, psychology, and English. I have 3+ years of tutoring
              experience and my goal is to get to know each student's learning
              style and work with them to understand material on a deeper level.
            </Typography>
          </Box>
          <Box
            component={"div"}
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2%",
            }}
          >
            <Button
              style={{
                background: "Green",
                color: "white",
                borderRadius: 70,
                height: "8vh",
                width: "20vw",
                marginTop: "2%",
                boxShadow: "0 6px 19px  #EAD7BB",
              }}
              variant="contained"
            >
              Message
            </Button>
            <Button
              style={{
                background: "Green",
                color: "white",
                borderRadius: 70,
                height: "8vh",
                width: "20vw",
                marginTop: "2%",
                boxShadow: "0 6px 19px  #EAD7BB",
              }}
              variant="contained"
            >
              Request a call
            </Button>
          </Box>
          {/* Highlights */}
          <Box>
            <Typography
              variant="h5"
              style={{
                marginTop: "6%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
                color: "green",
              }}
            >
              Highlights
            </Typography>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "40vw",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                  // color: "green",
                }}
              >
                1 employee
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                  // color: "green",
                }}
              >
                1 year in bussiness
              </Typography>
            </Box>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "40vw",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                }}
              >
                1 employee
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                }}
              >
                1 year in bussiness
              </Typography>
            </Box>
          </Box>

          {/* Details */}
          <Box>
            <Typography
              variant="h5"
              style={{
                marginTop: "6%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
                color: "green",
              }}
            >
              Details
            </Typography>

            <Box component={"div"} style={box}>
              <Box>
                <Typography
                  variant="h5"
                  style={{
                    marginTop: "2%",
                    marginLeft: "6%",
                    textShadow: "0 10px 10px var(--cream)",
                    fontFamily: "poppins",
                  }}
                >
                  Grade Level
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1%",
                    marginLeft: "6%",
                    textShadow: "0 10px 10px var(--cream)",
                    fontFamily: "poppins",
                  }}
                >
                  Pre-kindergarten, Elementary school, Middle school, High
                  school, College / graduate school, Adult learner
                </Typography>
              </Box>
            </Box>
            <Box component={"div"} style={box}>
              <Box>
                <Typography
                  variant="h5"
                  style={{
                    marginTop: "2%",
                    marginLeft: "6%",
                    textShadow: "0 10px 10px var(--cream)",
                    fontFamily: "poppins",
                  }}
                >
                  Subject
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "1%",
                    marginLeft: "6%",
                    textShadow: "0 10px 10px var(--cream)",
                    fontFamily: "poppins",
                  }}
                >
                  Reading, Essay writing, Creative writing, Handwriting,
                  Spelling, Grammar, Learning English as a 2nd language{" "}
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Reviews */}
          <Box>
          <Typography
              variant="h5"
              style={{
                marginTop: "6%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
                color: "green",
              }}
            >
              Reviews
              <Box>

              </Box>
            </Typography>

          </Box>
          {/* Services */}
          <Box>
            <Typography
              variant="h5"
              style={{
                marginTop: "6%",
                marginLeft: "4%",
                textShadow: "0 10px 10px var(--cream)",
                fontFamily: "poppins",
                color: "green",
              }}
            >
              Services
            </Typography>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "40vw",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                  // color: "green",
                }}
              >
                science
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                  // color: "green",
                }}
              >
               Reading And Writing Tutoring
              </Typography>
            </Box>
            <Box
              component={"div"}
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "40vw",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                }}
              >
              Psychology
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginTop: "4%",
                  marginLeft: "4%",
                  textShadow: "0 10px 10px var(--cream)",
                  fontFamily: "poppins",
                }}
              >
               PSL
              </Typography>
            </Box>
          </Box>
          <Box>
            <Footer/>
          </Box>
          {/* ***********8 */}
                  </Box>
      </Box>
    </Box>
  );
}
