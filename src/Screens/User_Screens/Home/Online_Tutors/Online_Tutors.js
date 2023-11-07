import { Box, Typography, Button } from "@mui/material";
// import icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Online_Tutors() {
  const detail = [
    {
      id: 1,
      heading: "Sanskrit",
      image:
        "https://cdn.pixabay.com/photo/2018/08/27/14/34/shaniwar-wada-3635113_1280.jpg",
    },
    {
      id: 2,
      heading: "Math",
      image:
        "https://cdn.pixabay.com/photo/2016/06/13/07/59/pi-1453836_1280.jpg",
    },
    {
      id: 3,
      heading: "Chess",
      image:
        "https://cdn.pixabay.com/photo/2017/01/19/20/28/chess-1993272_1280.jpg",
    },
    {
      id: 4,
      heading: "Chemistry",
      image:
        "https://cdn.pixabay.com/photo/2019/08/13/08/15/analysis-4402809_1280.jpg",
    },
    {
      id: 5,
      heading: "Physics",
      image:
        "https://cdn.pixabay.com/photo/2018/12/08/10/49/theory-of-relativity-3863153_1280.jpg",
    },
    {
      id: 6,
      heading: "Calucus",
      image:
        "https://cdn.pixabay.com/photo/2019/09/11/18/01/abstract-4469461_1280.jpg",
    },
    {
      id: 7,
      heading: "Workshop",
      image:
        "https://cdn.pixabay.com/photo/2016/01/30/09/09/anvil-1169340_1280.jpg",
    },
    {
      id: 1,
      heading: "Cricket",
      image:
        "https://cdn.pixabay.com/photo/2018/08/27/14/34/shaniwar-wada-3635113_1280.jpg",
    },
  ];

  const showButtons = () => {
    return detail.map((item) => {
      return (
        <Box style={{ marginTop: "2%", margin: "2%" }}>
          <Box>
            <Button
              variant="contained"
              style={{
                background: "white",
                color: "green",
                borderRadius: 70,
                height: "6vh",
                width: "9.5vw",
                fontSize: '0.7rem',
                boxShadow:'10px 10px 30px  5px  var(--cream)'
              }}
            >
              {item.heading}
            </Button>
          </Box>
        </Box>
      );
    });
  };
  return (
    <Box>
      <Box>
      <Box style={{display:'flex',justifyContent:'space-between',marginTop:'var(--margin-top)'}}>
          <Typography variant="h4" style={{marginLeft:"5%",color:'green',fontFamily:'poppins',textShadow:'0px 10px 10px var(--cream)'}}>Online Tutoring</Typography>
          
          <Box component={'div'}style={{display:'flex',flexDirection:'row',width:'11vw',marginTop:'1%'}}>
            <Typography style={{fontFamily:'poopins',fontWeight:'bold',fontSize:17,color:'green',textShadow:'0px 10px 10px var(--cream)'}}>See All</Typography>
            <ChevronRightIcon sx={{color:'green'}}/>
           </Box> 
          
        </Box>
        <Box
        component={'div'}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "5%",
            alignItems: "center",
            position: "absolute",
            zIndex:2,
            width:'86vw',
            height:'100vh'
          }}
        >
          <Box
            component={"div"}
            style={{
              display: "flex",
              flex: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              height: "20vh",
              width: "40vw",
           
            }}
          >
            {showButtons()}
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/08/41/apple-1868496_1280.jpg"
            width={"100%"}
          ></img>
        </Box>
      </Box>
    </Box>
  );
}
