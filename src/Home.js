import { useState } from "react";
import BtnList from "./btn";
import Profile from "./profile.js";

const Home = () => {
    const [buttons, setButton] = useState([
        {id:'twitter', href:'https://twitter.com/David61106641', title:'Twitter Link'},
        {id:'btn_zuri', href:'http://training.zuri.team', title:'Zuri Team'},
        {id:'books', href:'http://books.zuri.team', title:'Zuri Books'},
        {id:'book_python', href:'https://books.zuri.team/python-for-beginners?ref_id-david-Etalong>', title:'Python Books'},
        {id:'pitch', href:'https://background.zuri.team', title:'Background Check For Coders'},
        {id:'book_design', href:'https://books.zuri.team/design-rules', title:'Design Books'},
  
    ])

 
    return ( 
        <div className="container mt-5">
            <div className="main d-flex flex-column justify-content-center align-items-center">
         <Profile/>
       {/* <BtnList buttons = { buttons } title = "zuri Internship" /> */}
       <BtnList buttons = { buttons } />
       </div>
     </div>
     );
}
 
export default Home;