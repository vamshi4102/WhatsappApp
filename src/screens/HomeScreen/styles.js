import { StyleSheet } from "react-native";

const BlackColor = "#161817";
const PrimaryColor = "#40C351";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:55,
    width:'90%',
    alignSelf:'center'
  },
  back_image: {
    width: "100%",
    height: "100%",
  },
  // top bar
  top_bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize:25,
    color:'white',
    fontWeight:'bold'
  },
  top_bar_buttons: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  top_bar_btn: {
    marginHorizontal:5
  },
  status_list:{
    marginVertical:25
  },
//   sub nav
sub_nav:{
flexDirection:'row',
width:"70%",
alignItems:'center',
justifyContent:'space-between',
paddingVertical:10,
backgroundColor:'rgba(49, 235, 99,0.2)',
alignSelf:'center',
borderRadius:50
},
sub_nav_btn_active:{
    backgroundColor:PrimaryColor,
},
sub_nav_btn:{
    width:'42%',
    height:45,
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:10,
    borderRadius:50
},
sub_nav_text:{
color:'white'
},
});
export default styles;
