import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Customizer from "./Customizer/Customizer";
import Cart from './Summary/Cart';
import Features from './Features.js';

class App extends Component {
  state = {
    selected: {
      Processor: {
        name:
          "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
            <Customizer
              features={Features}
              selected={this.state.selected}
              updateFeature={this.updateFeature}
            />
             <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;