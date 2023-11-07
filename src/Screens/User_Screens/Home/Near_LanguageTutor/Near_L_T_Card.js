import { Avatar, Box, Button } from "@mui/material";

export default function Near_L_T_Card() {
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
      heading: "Crikcet",
      image:
        "https://cdn.pixabay.com/photo/2018/08/27/14/34/shaniwar-wada-3635113_1280.jpg",
    },
    
    
  ];

  const showCards = () => {
    return detail.map((item) => {
      return (
        <Box style={{marginTop:'2%',margin:'2%'}}>
          <Box>
            <Box>
              <Avatar
                src={item.image}
                sx={{ width: "17.5vw", height: "35vh",boxShadow:'0px 10px 10px var(--cream)' }}
              ></Avatar>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{
                  background: "white",
                  color: "green",
                  borderRadius: 70,
                  height: "8vh",
                  width: "17.5vw",
                  fontSize:16,
                  boxShadow:'0px 10px 10px var(--cream)'
                }}
              >
                {item.heading}
              </Button>
            </Box>
          </Box>
        </Box>
      );
    });
  };
  return (
    <Box >
      <Box style={{display:"flex",flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginLeft:'4%',marginRight:'4%',marginTop:'1%'}}>
        {showCards()}
        </Box>
    </Box>
  );
}
