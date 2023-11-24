const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

    function isValidLinkedInProfileURL(input){
        return linkedinProfileRegex.test(input)
    }

    const url = "www.linkedin.com/in/mukeshwebdp"
    if(isValidLinkedInProfileURL(url)){
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
    }else{
        console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
