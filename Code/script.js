// document.getElementById("form").addEventListener('submit',function(e){
//     e.preventDefault(); 
//     const msg =document.getElementById("notification"); 
//     msg.style.color="green"; msg.style.marginTop="15px"; msg.style.fontWeight="bold";
//     msg.textContent ="✅ Registration Successful!" 
//     })
// const removeStudent = () => {
//   localStorage.removeItem("studentProfile");
// };


const saveStudent = (studentObj) => {
  localStorage.setItem("studentProfile", JSON.stringify(studentObj));
};

const loadStudent = () => {
  const data = localStorage.getItem("studentProfile");
  return data ? JSON.parse(data) : null;
};

const removeStudent = () => {
  localStorage.removeItem("studentProfile");
};

//registeration

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

//profile

if (document.getElementById("profileInfo")) {
  const student = loadStudent();

  if (!student) {
    alert("❌ Please register first!");
    window.location.href = "Registration.html";
  } else {
    const studentTable = `
      <table class="profile-table"></tr>
        <tr><th colspan="2"> Student Details</th>
        <tr class="even"><td><strong> Name :</strong></td><td>${student.name}</td></tr>
        <tr><td><strong> Email :</strong></td><td>${student.email}</td></tr>
        <tr class="even"><td><strong> Reg No :</strong></td><td>${student.regno}</td></tr>
        <tr><td><strong> Date of Birth :</strong></td><td>${student.dob}</td></tr>
        <tr class="even"><td><strong> Department :</strong></td><td>${student.department}</td></tr>
        <tr><td><strong> Semester :</strong></td><td>${student.semester}</td></tr>
      </table>
    `;
    document.getElementById("profileInfo").innerHTML = studentTable;
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    removeStudent();
    alert("👋 You have been logged out.");
    window.location.href = "Registration.html";
  });
}


//time
if (document.getElementById("time-display")) {
  const display =document.getElementById("time-display");
  function updateTime(){
    const now =new Date();
    display.textContent =now.toLocaleString();
    
  }
  updateTime();
  setInterval(updateTime, 1000);
  
  
}
