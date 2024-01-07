//@@viewOn:imports
import { createVisualComponent, useScreenSize } from "uu5g05";
import Config from "./config/config.js";
import { withRoute } from "uu_plus4u5g02-app";
import RouteBar from "../core/route-bar";
import SlistProvider from "../core/s-list-overview/list-provider.js";
import SListOverview from "../core/s-list-overview/list-overview.js";
//@@viewOff:imports

//@@viewOn:constants
const user = {
  name: "Emily Smith"
}
//@@viewOff:constants

//@@viewOn:css
const Css = {
  container: (screenSize) => {
    let maxWidth;

    switch (screenSize) {
      case "xs":
      case "s":
        maxWidth = "100%";
        break;
      case "m":
      case "l":
        maxWidth = 640;
        break;
      case "xl":
      default:
        maxWidth = 1280;
    }

    return Config.Css.css({ maxWidth: maxWidth, margin: "0px auto", paddingLeft: 8, paddingRight: 8 });
  },
  createView: () => Config.Css.css({ margin: "24px 0px" }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let ListOverview = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListOverview",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [screenSize] = useScreenSize();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <div className={Css.container(screenSize)}>
          <RouteBar />
          <SlistProvider>
            {(SLDataList) => (<SListOverview SLDataList={SLDataList} user={user}/>)}
          </SlistProvider>
        </div>
      </>
    );
    //@@viewOff:render
  },
});

ListOverview = withRoute(ListOverview, { authenticated: true });

//@@viewOn:exports
export { ListOverview };
export default ListOverview;
//@@viewOff:exports
