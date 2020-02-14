// Code adapted from Code Institute lesson on use of emailJS

const companyName='Visit South East Asia';

   
        (function() {
            emailjs.init("user_6NVc0p3jIEhAuHZGUjbw5");
        })();
    

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
