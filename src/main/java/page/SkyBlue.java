package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;



public class SkyBlue {
	WebDriver driver;
	public SkyBlue(WebDriver driver) {
		this.driver =driver;
	}
	
// Selecting elements using TagName	
//	@FindBy(how = How.TAG_NAME, using = "//button[contains(text(),'Set SkyBlue Background')]") 
//	WebElement SKYBLUEBUTTON;
//	@FindBy(how = How.TAG_NAME, using = "//button[contains(text(),'Set White Background')]")
//	WebElement WHITEBACKGROUND;
//Selecting elements using XPATH as final option
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]") WebElement SKYBLUEBUTTON;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")WebElement WHITEBACKGROUND;
	public void userAbleToChangeSkyBlue() {
		SKYBLUEBUTTON.click();
	}
	public void userAbleToChangeWhiteColor() {
		WHITEBACKGROUND.click();
	}

}
