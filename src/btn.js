// const BtnList = ({buttons, title}) => {
    const BtnList = ({buttons}) => {
    
        return ( 
            <div className="container">
                {/* <h2>{title}</h2> */}
        {buttons.map(btn =>( 
        <div className="mb-5 bg bg-light bg-gradient d-flex  justify-content-center align-items-center link-preview ">
            <a className ="link-dark linkStyle mb-4 " href={btn.href} id = {btn.id}> {btn.title} </a>
            
        </div>
        //    console.log( {btn.id}) 
         ))}
       
         </div>
     )
}
 
export default BtnList;