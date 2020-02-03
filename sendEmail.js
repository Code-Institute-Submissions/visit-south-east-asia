function sendMail(contactForm) {
    emailjs.send("gmail", "template_8PHabYFz", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "request_some_info": contactForm.projectsummary.value
    })
        .then(
            function (response) {
                console.log("SUCCEWSSSSS", response);
            },
            function (error) {
                console.log("Faileddd", error);
            }
        );
        
    return false;
    
}
