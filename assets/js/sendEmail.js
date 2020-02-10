var companyName='Visit South East Asia';

function sendMail(contactForm) {
    emailjs.send("gmail", "template_8PHabYFz", {
       "to_name": companyName,
        "client_name": contactForm.name.value,
        "client_email": contactForm.emailaddress.value,
        "how_can_we_help": contactForm.howcanwehelp.value
    })
        .then(
            function (response) {
                console.log("Success", response);
            },
            function (error) {
                console.log("Failed", error);
            }
        );
        
    return false;
    
}
