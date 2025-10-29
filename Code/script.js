// registration
document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();
    const msg =document.getElementById("notification");
    msg.style.color="green";
    msg.style.marginTop="15px";
    msg.style.fontWeight="bold";
    msg.textContent ="✅ Registration Successful!"
    msg.style.textAlign="center";
    alert("✅ Registration Successful!");
})






// profile

const loadStudent = () =>{
    const data = localStorage.getItem("studentProfile")
    return data? JSON.parse(data): null;
};
const removeStudent =()=>{
    localStorage.removeItem("studentProfile");
};

const student = loadStudent();

if (!student) {
    alert("❌ Please register first!");
    window.location.href="Registration.html";
}else{
    const infoHTML="<p><strong>Name:</strong>${student.name}</p> <p><strong>Email:</strong>${student.email}</p> <p><strong>Reg No:</strong>${student.regno}</p> <p><strong>Date of Birth:</strong>${student.dob}</p> <p><strong>Department:</strong>${student.department}</p> <p><strong>Semester:</strong>${student.semester}</p>";
    document.getElementById("profileInfo").innerHTML=infoHTML;
}


document.getElementById("logoutBtn").addEventListener("click", () => {
    removeStudent();
    window.location.href="Registration.html";
});