//@@viewOn:imports
import { createVisualComponent } from "uu5g05";
import Config from "./config/config.js";
import { PieChart } from "uu5chartsg01";
import { Block } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListPieChart = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListPieChart",
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
        <PieChart data={props.data} height={250} serieList={[
          {
            valueKey: "items",
            labelKey: "name",
            label: [{ position: "inside", type: "value" }, { position: "outside", type: "label" }],
            innerRadius: 50,
            outerRadius: 80
          }
        ]}/>
      </Block>
  );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListPieChart };
export default ListPieChart;
//@@viewOff:exports
