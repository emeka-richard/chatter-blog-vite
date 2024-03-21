import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./WelcomeView-UI/Welcome";
import Testimonials from "./Testimonial-UI/Testimonials";
import NavbarLinks from "./Navbar-UI/Navbar-Links";
import Blogs from "./Blog-Footer-UI/Blogs";
import AboutAnalytics from "./About-UI/About-analytics";
import AboutChatter from "./About-UI/About-chatter";
import AboutContentCreation from "./About-UI/About-content-creation";
import AboutSocialInteraction from "./About-UI/About-social-interaction";
import AboutWhyJoin from "./About-UI/About-why-join";
// import scrollToSection from "../../middlewares/scrollControl";

// Hero Page - Welcome Component
describe("HeroPage", () => {
  it("Renders Hero Welcome Component", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    // Assert that the first welcome note is rendered
    expect(screen.getByText(/Welcome to Chatter:/i)).toBeTruthy();

    // Assert that the second welcome note is rendered
    expect(screen.getByText(/Unleash the Power of Words/i)).toBeTruthy();
    screen.debug();
  });

  it('renders "Get started" button with correct link', () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    // Assert that the "Get started" button is rendered
    const getStartedButton = screen.getByRole("link", { name: /Get started/i });
    expect(getStartedButton).toBeTruthy();

    // Assert that the "Get started" button has the correct link
    expect(getStartedButton.getAttribute("href")).toBe("/auth/sign/register");
  });
});

// Hero Page - Testimonial Component
describe("Testimonials Component", () => {
  it("renders user testimonial correctly", () => {
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );

    // Assert that user's name, workplace, and testimony are displayed
    expect(screen.getByText(/Adebobola Muhydeen/i)).toBeTruthy();
    expect(screen.getByText(/Software Developer at Apple/i)).toBeTruthy();
    expect(
      screen.getByText(
        /Chatter has become an integral part of my online experience/
      )
    ).toBeTruthy();

    // Assert that user's image is displayed
    const userImage = screen.getByAltText(/Adebobola Muhydeen's avatar/i);
    expect(userImage).toBeTruthy();
    expect(userImage.getAttribute("src")).toBe("/src/assets/images/user-1.png"); // Ensure the correct image is being displayed
  });

  it('redirects to registration page when "Join chatter" button is clicked', () => {
    render(
      <BrowserRouter>
        <Testimonials />
      </BrowserRouter>
    );

    const joinChatterButton = screen.getByLabelText("Join chatter");
    fireEvent.click(joinChatterButton);

    // const joinChatterButton = screen.getByRole('link', { name: /Join chatter/i });
    expect(joinChatterButton).toBeTruthy();
    // Assert that the correct route is being navigated to
    expect(joinChatterButton.getAttribute("href")).toBe("/auth/sign/register");
  });
});

// Hero Page -  Navbar Links Component

describe("NavbarLinks", () => {
  it("renders all navigation links", () => {
    render(
      <BrowserRouter>
        <NavbarLinks />
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Home")).toBeTruthy();
    expect(screen.getByLabelText("About Us")).toBeTruthy();
    expect(screen.getByLabelText("Contact")).toBeTruthy();
    expect(screen.getByLabelText("Blogs")).toBeTruthy();
    screen.debug();
  });

  it("scrolls to corresponding sections when clicked", () => {
    // Mock the scrollToSection function

    render(
      <BrowserRouter>
        <NavbarLinks />
      </BrowserRouter>
    );

    // Get all links
    const homeLink = screen.getByTestId("home-id");
    const aboutLink = screen.getByTestId("about-id");
    const contactLink = screen.getByTestId("contact-id");
    const blogsLink = screen.getByTestId("blog-id");

    // Simulate click on each link
    fireEvent.click(homeLink);
    fireEvent.click(aboutLink);
    fireEvent.click(contactLink);
    fireEvent.click(blogsLink);

    expect(homeLink).toBeTruthy();
    expect(aboutLink).toBeTruthy();
    expect(contactLink).toBeTruthy();
    expect(blogsLink).toBeTruthy();

    expect(homeLink.getAttribute("href")).toBe("/");
    expect(aboutLink.getAttribute("href")).toBe("/");
    expect(contactLink.getAttribute("href")).toBe("/");
    expect(blogsLink.getAttribute("href")).toBe("/");

    screen.debug();
  });
});

// Hero Page - Blogs Component
describe("Blogs", () => {
  it("Renders Hero Blog Component", () => {
    render(
      <BrowserRouter>
        <Blogs />
      </BrowserRouter>
    );
    // Assert that the first welcome note is rendered
    expect(screen.getByText(/Write, read and connect/i)).toBeTruthy();
    expect(screen.getByText(/Share people your great ideas,/i)).toBeTruthy();
    // Assert that user's image is displayed
    const userImage3 = screen.getByAltText(/avi1.png/i);
    const userImage4 = screen.getByAltText(/avi2.png/i);
    const userImage2 = screen.getByAltText(/avi3.png/i);
    expect(userImage3).toBeTruthy();
    expect(userImage4).toBeTruthy();
    expect(userImage2).toBeTruthy();

    expect(userImage3.getAttribute("src")).toBe(
      "/src/assets/images/user-3.png"
    ); // Ensure the correct image is being displayed
    expect(userImage4.getAttribute("src")).toBe(
      "/src/assets/images/user-4.png"
    ); // Ensure the correct image is being displayed
    expect(userImage2.getAttribute("src")).toBe(
      "/src/assets/images/user-2.png"
    ); // Ensure the correct image is being displayed

    screen.debug();
  });

  it('renders "Get started" button with correct link', () => {
    render(
      <BrowserRouter>
        <Blogs />
      </BrowserRouter>
    );

    const getStartedButton = screen.getByRole("link", { name: /Get started/i });
    expect(getStartedButton).toBeTruthy();

    // Assert that the "Get started" button has the correct link
    expect(getStartedButton.getAttribute("href")).toBe("/auth/sign/register");
  });
});

// Hero Page - All About Components
describe("About", () => {
  it("Renders about-analytics component", () => {
    render(
      <BrowserRouter>
        <AboutAnalytics />
      </BrowserRouter>
    );
    expect(screen.getByText("Analytics")).toBeTruthy();
    expect(
      screen.getByText(/Analytics to track the number of views,/i)
    ).toBeTruthy();
    const analyticsIcon = screen.getByAltText(/Analytics Icon/i);
    expect(analyticsIcon).toBeTruthy();

    expect(analyticsIcon.getAttribute("src")).toBe(
      "/src/assets/images/analytics-1.png"
    ); // Ensure the correct image is being displayed
  });

  it("Renders about-chatter component", () => {
    render(
      <BrowserRouter>
        <AboutChatter />
      </BrowserRouter>
    );
    expect(screen.getByText("About Chatter")).toBeTruthy();
    expect(
      screen.getByText(/Chatter is a multi-functional platform/i)
    ).toBeTruthy();

    // const analyticsIcon = screen.getByAltText(/Analytics Icon/i);
    const backGroundImg = screen.getAllByRole("img", { name: 'Image description' })

    // expect(analyticsIcon).toBeTruthy();
    expect(backGroundImg).toBeTruthy();

    screen.debug()
  });

  it("Renders about-content-creation component", () => {
    render(
      <BrowserRouter>
        <AboutContentCreation />
      </BrowserRouter>
    );
    expect(screen.getByText("Content Creation")).toBeTruthy();
    expect(
      screen.getByText(/Write nice and appealing/i)
    ).toBeTruthy();
    const contentIcon = screen.getByAltText(/Content Creation Icon/i);
    expect(contentIcon).toBeTruthy();

    expect(contentIcon.getAttribute("src")).toBe(
      "/src/assets/images/content-1.png"
    ); // Ensure the correct image is being displayed
  });

  it("Renders about-social-interaction component", () => {
    render(
      <BrowserRouter>
        <AboutSocialInteraction />
      </BrowserRouter>
    );
    expect(screen.getByText("Social Interactions")).toBeTruthy();
    expect(
      screen.getByText(/Users on the platform can interact/i)
    ).toBeTruthy();
    const socialIcon = screen.getByAltText(/Social Interaction Icon/i);
    expect(socialIcon).toBeTruthy();

    expect(socialIcon.getAttribute("src")).toBe(
      "/src/assets/images/community-1.png"
    ); // Ensure the correct image is being displayed
  });
  it("Renders about-why-join component", () => {
    render(
      <BrowserRouter>
        <AboutWhyJoin />
      </BrowserRouter>
    );
    expect(screen.getByText("Why you should join chatter")).toBeTruthy();
    expect(
      screen.getByText(/Our goal is to make writers/i)
    ).toBeTruthy();
  });

});
