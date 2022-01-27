package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import page.SkyBlue;
import page.TestPage;

public class ChangeColors extends TestPage {
	//WebDriver driver;
	SkyBlue skyblue;
	@Before
	
	public void getUrl() {
		launchBrowser();
		skyblue = PageFactory.initElements(driver, SkyBlue.class);}
	
	
	@Given("^usen on the homepage$")
	public void usen_on_the_homepage() throws Throwable {
	    driver.get("http://techfios.com/test/101/");
	}

	@When("^user able to clik$")
	public void user_able_to_clik() throws Throwable {
	    skyblue.userAbleToChangeSkyBlue();
	}
	@When("^\"([^\"]*)\" button exists$")
	public void button_exists(String arg1) throws Throwable {
	    skyblue.userAbleToChangeWhiteColor();
	}
}
