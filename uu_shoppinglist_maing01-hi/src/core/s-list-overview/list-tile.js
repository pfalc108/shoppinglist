//@@viewOn:imports
import { createVisualComponent, Lsi, useState } from "uu5g05";
import Uu5TilesElements from "uu5tilesg02-elements";
import Uu5Elements from "uu5g05-elements";
import Config from "./config/config.js";
import CreateForm from "./create-form.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ListTile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ListTile",
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
    const { a } = Uu5Elements.useSpacing();
    const { data } = props;
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const ownership = (props) => {
      if (props.data.data.uuOwnerIdentityName === props.user.name) {
        return [
          {
            icon: "uugds-pencil",
            onClick: () => setOpen(true),
          },
          {
            icon: "uugds-delete",
            onClick: () => setOpen2(true),
          },
        ];
      } else {
        return [];
      }
    };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <Uu5TilesElements.Tile
        header={<>{props.data.data.name}</>}
        actionList={ownership(props)}
        displayActionList={true}
      >
        <Uu5Elements.Text significance="subdued" colorScheme="building" category="story" segment="body" type="minor">
          <Lsi lsi={{ cs: "Vlastník", en: "Owner"}} />:{" "}
        </Uu5Elements.Text>
        <Uu5Elements.Text
          category="story"
          segment="body"
          type="minor"
          className={Config.Css.css({ justifySelf: "start" })}
        >
          {props.data.data.uuOwnerIdentityName}
        </Uu5Elements.Text>
        <Uu5Elements.Text significance="subdued" colorScheme="building" category="story" segment="body" type="minor">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Lsi lsi={{ cs: "Archivováno", en: "Archived"}} />:{" "}
        </Uu5Elements.Text>
        <Uu5Elements.Text
          category="story"
          segment="body"
          type="minor"
          className={Config.Css.css({ justifySelf: "start" })}
        >
          {props.data.data.archived ? <Lsi lsi={{ cs: "ano", en: "yes"}} /> : <Lsi lsi={{ cs: "ne", en: "no"}} /> }
        </Uu5Elements.Text>
        <CreateForm
          open={open}
          onClose={() => setOpen(false)}
          SLDataList={props.SLDataList}
          user={props.user}
          data={props.data}
          update={true}
          defaultText={props.data.data.name}
          header={<Lsi lsi={{ cs: "Přejmenovat nákupní seznam", en: "Rename shopping list"}} />}
        />
        <Uu5Elements.Dialog
          open={open2}
          onClose={() => setOpen2(false)}
          header={<Lsi lsi={{ cs: "Smazat tento nákupní seznam?", en: "Delete this shopping list?"}} />}
          icon={<Uu5Elements.Svg code="uugdssvg-svg-delete" />}
          info={data.data.name}
          actionDirection="horizontal"
          actionList={[
            {
              children: <Lsi lsi={{ cs: "Zrušit", en: "Cancel"}} />,
              onClick: () => console.log("Cancel"),
            },
            {
              children: <Lsi lsi={{ cs: "Smazat", en: "Delete"}} />,
              onClick: (e) => {
                props.data.handlerMap.delete();
              },
              colorScheme: "red",
              significance: "highlighted",
            },
          ]}
        />
      </Uu5TilesElements.Tile>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ListTile };
export default ListTile;
//@@viewOff:exports
