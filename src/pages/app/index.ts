import MainPage from "../main";
import Page from "../../core/templates/page";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";

class App {
  private container: HTMLElement;
  private initialPage: MainPage;

  constructor() {
    this.container = document.querySelector("#root")!;
    this.initialPage = new MainPage("main-page");
  }

  static renderNewPage(page: Page) {
    const container = document.querySelector("#root")!;
    container.innerHTML = "";

    if (page) {
      container.append(page.render());
    }
  }

  private enableRouteChange() {
    window.addEventListener("hashchange", () => {
      console.log("hashchange");
    });
  }

  run() {
    App.renderNewPage(new StatisticsPage("main-page"));
    this.enableRouteChange();
    history.pushState({ foo: "bar" }, "page2", "bar");
  }
}

export default App;
