const Form = ({ children, onSubmit }) => {     return ( 
    <form onSubmit={onSubmit} className="p-4 bg-white rounded shadow-md"> 
      {children} 
    </form> 
);   };  
export default 
Form; 
     
