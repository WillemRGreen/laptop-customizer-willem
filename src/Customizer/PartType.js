import React from 'react';
import slugify from 'slugify';
import ItemOption from './ItemOption';


function PartType(props) {
    const feature = props.options.map(item=> {
        const itemList=slugify(JSON.stringify(item))
        return (
            <ItemOption
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

export default PartType;