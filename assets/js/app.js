function sendMail(e){
    e.preventDefault();
    var $this = e.target;
    debugger    
    var fName = $($this).find('#fname').val(),
        lName = $($this).find('#lname').val(),
        email = $($this).find('#email').val(),
        phone = $($this).find('#phone').val(),
        msg = $($this).find('#message').val();
    var url = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=cfaischool2013@gmail.com&su=Contact_us_from_website&body='+
    "First Name: " + fName + "\n" +
    "Last Name: " + lName + "\n" +
    "Phone: " + phone + "\n" +
    "Email: " + email + "\n" +
    "Message: " + msg; 

    window.open(encodeURI(url), '_blank');
}