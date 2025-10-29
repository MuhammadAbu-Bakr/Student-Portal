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
// registreation page
if (document.getElementById("form")) {
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const student = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      regno: document.getElementById("regno").value,
      dob: document.getElementById("dob").value,
      department: document.getElementById("department").value,
      semester: document.getElementById("semester").value,
    };
    saveStudent(student);
    alert("✅ Registration Successful!");
    window.location.href = "Profile.html";
  });
}


