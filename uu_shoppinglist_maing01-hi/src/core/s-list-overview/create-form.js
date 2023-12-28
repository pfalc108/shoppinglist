//@@viewOn:imports
import { createVisualComponent, Lsi, Utils } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const CreateForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CreateForm",
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
    const handleSubmit = (e) => {
      console.log(props);
      if (props.itemId === 0) {
        const newShoppingList = {};
        newShoppingList.id = Utils.String.generateId();
        newShoppingList.name = e.data.value.name;
        newShoppingList.owner = props.user;
        newShoppingList.member = [props.user];
        newShoppingList.archived = false;
        console.log(newShoppingList)
        props.shoppingListDataList.handlerMap.create(newShoppingList);
      } else {
        const idx = newListData.findIndex(x => x.id === props.itemId);
        newListData[idx].name = e.data.value.name;
      }
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <>
        <Uu5Forms.Form.Provider
          onSubmit={(e) => {
            console.log(props);
            !props.update
              ? props.SLDataList.handlerMap.create({ id: Utils.String.generateId(), name: e.data.value.name })
              : props.data.handlerMap.update({ id: props.data.data.id, name: e.data.value.name });
            console.log(props);
            props.onClose();
          }}
        >
          <Uu5Elements.Modal
            header={props.header}
            footer={
              <Uu5Elements.Grid
                templateColumns={{ xs: "repeat(2, 1fr)", s: "repeat(2, auto)" }}
                columnGap={Uu5Elements.UuGds.SpacingPalette.getValue(["fixed", "c"])}
                justifyContent={{ s: "end" }}
              >
                <Uu5Forms.CancelButton onClick={props.onClose} />
                <Uu5Forms.SubmitButton><Lsi lsi={{ cs: "Vytvořit", en: "Create"}} /></Uu5Forms.SubmitButton>
              </Uu5Elements.Grid>
            }
            open={props.open}
          >
            <Uu5Forms.Form.View>
              <div>
                <Uu5Forms.FormText name="name" label={<Lsi lsi={{ cs: "Název nového nákupního seznamu", en: "New shopping list name"}} />} placeholder={<Lsi lsi={{ cs: "Zadejte název", en: "Enter the name"}} />} initialValue={props.defaultText} required />
              </div>
            </Uu5Forms.Form.View>
          </Uu5Elements.Modal>
        </Uu5Forms.Form.Provider>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CreateForm };
export default CreateForm;
//@@viewOff:exports
