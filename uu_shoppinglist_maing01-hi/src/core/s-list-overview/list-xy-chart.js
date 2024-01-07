//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Config from "./config/config.js";
import { Block } from "uu5g05-elements";
import { XyChart } from "uu5chartsg01";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListXyChart = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListXyChart",
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
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Block>
        <XyChart
          data={[props.data]}
          layout="vertical"
          height={15}
          width="100%"
          serieList={[
            {
              valueKey: "checked",
              bar: { stackId: "1" },
            },
            {
              valueKey: "unchecked",
              bar: { stackId: "1" },
            }
          ]}
          labelAxis={{ dataKey: "items" }}
        />
      </Block>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListXyChart };
export default ListXyChart;
//@@viewOff:exports
