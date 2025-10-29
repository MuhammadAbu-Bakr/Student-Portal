
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

