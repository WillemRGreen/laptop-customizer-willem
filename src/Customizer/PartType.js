import React from 'react';
import slugify from 'slugify';
import Items from './ItemOption';


function Category(props) {
    const feature = props.options.map(item=> {
        const itemList=slugify(JSON.stringify(item))
        return (
            <Items
              key={itemList}
              id={itemList}
              feature={props.name}
              itemList={itemList}
              item={item}
              updateFeature={props.updateFeature}
              selected={props.selected}
        />
        )
    })

    const {name, featureHash} = props;

    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{name}</h3>
        </legend>
        {feature}
      </fieldset>
    )
}

export default Category;