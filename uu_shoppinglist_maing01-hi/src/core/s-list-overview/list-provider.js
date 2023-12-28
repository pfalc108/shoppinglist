//@@viewOn:imports
import { createVisualComponent, useDataList } from "uu5g05";
import Config from "./config/config.js";
import Calls from "calls";
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

const ListProvider = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "SlistProvider",
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
    const SLDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        loadNext: handleLoadNext,
        create: handleCreate,
      },
      itemHandlerMap: {
        update: handleUpdate,
        delete: handleDelete,
      },
      pageSize: 3,
    });

    function handleLoad(dtoIn) {
      return Calls.shoppingList.list(dtoIn);
    }

    function handleLoadNext(dtoIn) {
      return Calls.shoppingList.list(dtoIn);
    }

    function handleCreate(values) {
      return Calls.shoppingList.create(values);
    }

    function handleUpdate(values) {
      console.log(values)
      const dtoIn = { values }

      return Calls.shoppingList.update(values);
    }

    function handleDelete(slist) {
      const dtoIn = { id: slist.id };
      return Calls.shoppingList.delete(dtoIn, props.baseUri);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return typeof props.children === "function" ? props.children(SLDataList) : props.children;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListProvider };
export default ListProvider;
//@@viewOff:exports
