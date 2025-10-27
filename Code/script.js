// registration
document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();
    const msg =document.getElementById("notification");
    msg.style.color="green";
    msg.style.marginTop="15px";
    msg.style.fontWeight="bold";
    msg.textContent ="✅ Registration Successful!"
    alert("✅ Registration Successful!");
})