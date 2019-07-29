import { ReactSelector, waitForReact } from "testcafe-react-selectors";
import { Selector } from "testcafe";

class SearchTracksTests {
  createEnvironment = async () => {
    fixture("tracks tests")
      .page("http:localhost:3000/search-tracks")
      .beforeEach(async () => {
        await waitForReact();
      });
  };

  firstRender = () => {
    test("first render", async t => {
      const el = ReactSelector("SearchTracks");
      const search = await el.getReact();
      const message = Selector("span").withText("Find your favorite tracks");

      await t
        .expect(search.state.tracks.length)
        .eql(0)
        .expect(message.exists)
        .ok();
    });
  };

  search = () => {
    test("search render", async t => {
      const searchInput = Selector(".search-input");
      const TokenModal = ReactSelector("TokenModal");
      const modal = await TokenModal.getReact();

      await t
        .typeText(searchInput, "Bob Marley")
        .wait(1000)
        .expect(TokenModal.exists)
        .ok();
    });
  };
}

export default new SearchTracksTests();
