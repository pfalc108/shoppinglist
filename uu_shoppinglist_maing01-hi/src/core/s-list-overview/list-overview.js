//@@viewOn:imports
import { createVisualComponent, Lsi, useState, Utils } from "uu5g05";
import Uu5TilesControls from "uu5tilesg02-controls";
import Uu5Elements from "uu5g05-elements";
import Uu5Tiles from "uu5tilesg02";
import Uu5TilesElements from "uu5tilesg02-elements";
import Config from "./config/config.js";
import ListTile from "./list-tile";
import CreateForm from "./create-form";

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

const ListOverview = createVisualComponent({
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
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const [activeFilterList, setActiveFilterList] = useState([{ key: "archived", value: [true] }]);
    const DATA = props.SLDataList.data;
    console.log(DATA);
    const FILTER_DEFINITION_LIST = [
      {
        key: "archived",
        label: <Lsi lsi={{ cs: "Skrýt archivované", en: "Hide archived" }}/>,
        filter: (item, value) => {
          if (value) {
            let itemArchived = typeof item.archived === "object" ? Utils.Language.getItem(item.archived) : item.archived;
            return !itemArchived;
          }
          return true;
        },
        inputType: "bool",
      },
    ];

    const SERIE_LIST = [
      { value: "name", label: "Název:" },
      { value: "owner", label: "Vlastník:" },
    ];

    const [open, setOpen] = useState(false);

    return (
      <>
        <>
          {/* Controller provider for filtering Shopping Lists */}
          <Uu5Tiles.ControllerProvider
            data={DATA}
            filterDefinitionList={FILTER_DEFINITION_LIST}
            filterList={activeFilterList}
            onFilterChange={(e) => setActiveFilterList(e.data.filterList)}
            serieList={SERIE_LIST}
          >
            <CreateForm open={open} onClose={() => setOpen(false)} SLDataList={props.SLDataList} update={false} data={props.data} user={props.user} itemId={0} defaultText=""
                        header={<Lsi lsi={{ cs: "Vytvořit nový nákupní seznam", en: "Create new shopping list" }}/>}/>
            {/* Grid to display Shopping Lists including Filter for non-Archived only */}
            <Uu5Elements.Block actionList={[
              { component: (<Uu5Elements.Button onClick={() => setOpen(true)} size="xs" icon="mdi-plus-box"><Lsi lsi={{ cs: "Vytvořit nový nákupní seznam", en: "Create new shopping list" }}/></Uu5Elements.Button>) },
              { component: <Uu5TilesControls.FilterButton type="bar" displayType="button"/> }
            ]}>
              <Uu5TilesControls.FilterBar displayClearButton={false} />
              <Uu5TilesControls.FilterManagerModal/>
              <Uu5TilesElements.Grid
                rowSpacing={8}
                tileHeight={300}
                tileMinWidth={400}
                tileMaxWidth={800}
                tileSpacing={8}
              >
                <ListTile SLDataList={props.SLDataList} user={props.user}/>
              </Uu5TilesElements.Grid>
            </Uu5Elements.Block>
          </Uu5Tiles.ControllerProvider>
        </>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListOverview };
export default ListOverview;
//@@viewOff:exports
