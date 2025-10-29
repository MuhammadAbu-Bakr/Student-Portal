document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault(); 
    const msg =document.getElementById("notification"); 
    msg.style.color="green"; msg.style.marginTop="15px"; msg.style.fontWeight="bold";
    msg.textContent ="✅ Registration Successful!" 
    })
const removeStudent = () => {
  localStorage.removeItem("studentProfile");
};




const loadStudent = () => {
  const data = localStorage.getItem("studentProfile");
  return data ? JSON.parse(data) : null;
};





const saveStudent = (studentObj) => {
  localStorage.setItem("studentProfile", JSON.stringify(studentObj));
};
