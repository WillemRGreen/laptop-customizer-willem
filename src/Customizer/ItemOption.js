import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function ItemOption(props) {
  const {itemList, item, feature} = props;

  return (
    <div key={itemList} className="feature__item">
      <input
        type="radio"
        id={itemList}
        className="feature__option"
        name={slugify(feature)}
        checked={
          item.name === props.selected[feature].name
        }
        onChange={(e) => {
          props.updateFeature(feature, item);
        }}
      />
      <label htmlFor={props.itemList} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default ItemOption;