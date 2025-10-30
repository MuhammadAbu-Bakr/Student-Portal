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

//prfile logic


if (document.getElementById("profileInfo")) {
  const student = loadStudent();

  
  if (!student) {
    alert("❌ Please register first!");
    window.location.href = "Registration.html";
  } else {

    const studentInfo = `
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>Reg No:</strong> ${student.regno}</p>
      <p><strong>Date of Birth:</strong> ${student.dob}</p>
      <p><strong>Department:</strong> ${student.department}</p>
      <p><strong>Semester:</strong> ${student.semester}</p>
    `;
    document.getElementById("profileInfo").innerHTML = studentInfo;
  }


  document.getElementById("logoutBtn").addEventListener("click", () => {
    removeStudent();
    alert("👋 You have been logged out.");
    window.location.href = "Registration.html";
  });
}
