import { makeStyles } from "@mui/styles";






export const AboutStyle = makeStyles({
 
  paperbox: {
    marginLeft: "8%",
  },
 
  paper_01: {
    height:"70vh",
    width: "39vw",
    position: "absolute",
    marginLeft: "2%",
    marginTop: "2%",
    boxShadow:'0 5px 19px  green'

  },
  paper_02: {
    height: "61vh",
    width: "35vw",
    position: "absolute",
    zIndex: 1,
    marginLeft: "4%",
    marginTop: "4%",
    boxShadow:'0 6px 19px  green'

  },
  paper_03: {
    height: "52.5vh",
    width: "31vw",
    boxShadow:'1px 0px 20px black',
    position: "absolute",
    zIndex: 2,
    marginLeft: "6%",
    marginTop: "6%",
    borderRadius:100 ,
    background:
      'url("https://plus.unsplash.com/premium_photo-1682751162814-ed2b7da162b9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D")',
    backgroundSize: "68vh 53vh",
    backgroundRepeat: "no-repeat",
  },
  typography_h: {
    fontSize: 50,
    fontFamily: "poppins",
    color: "darkgreen",
    justifyContent: "center",
  
  },
  typography_p: {
    fontSize: 16,
    lineHeight:1.8,
    marginTop:'3%',
    fontFamily:'poppins'
  },
  button:{
    background: "green",
    color: "white",
    borderRadius: 70,
    height: "8vh",
    width: "10vw",
    marginTop:"18%",
    boxShadow:'0 6px 19px  green'
  }
});
