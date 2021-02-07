//This Spec File contains the test case covering the flow- from hitting the URL to applying for a Software Testing profile

describe('E2E flow of test plan', function(){
	
	//Initializing all the variables
	var checkSoftwareTestingProfile;
	var path = require('path');
	var fileToUpload = "C:\\Users\\mohtej01\\eclipse-workspace\\Galytix assignment\\Dummy.docx";
	var absolutePath = path.resolve("C:\\Users\\mohtej01\\eclipse-workspace\\Galytix assignmentt", fileToUpload);
	
	//The below mentioned it block is for Searching Testing Engineer profile and clicking on the URL of it.
	it('Open Url and search for Testing Engineer profile with assertion', function(){
		
		browser.get("http://localhost:4200/");
		expect(checkSoftwareTestingProfile= element(by.css("a[href='/job/3']")).element(by.css("span[class='title']")).getText()).toBe("Testing Engineer");
		checkSoftwareTestingProfile.click();
		
	})
	
	
	//The below mentioned it block is for clicking on Apply Now button for the profile you selected
	it('Click Apply Now for the profile user selected', function(){
		
		element(by.css("button")).click();
		
	})
	
	//The below mentioned block is for filling the mandatory field and clicking on Apply Now button
    it('Fill Name, Email and upload File and thenclick on Apply Now button', function(){
    	
	    element(by.name("name")).sendKeys("Mohit");
	    element(by.name("email")).sendKeys("abc@mail.com");
	    element(by.name("resume")).sendKeys(absolutePath);
	    element(by.css("button[type='submit']")).click();
	
})

    // Successfull message upon complition
    it('Sucess message upon complition of flow', function(){
 	
	    expect(element(by.css("div[class='success']")).getText()).toBe("Application submitted")
	
})

	})