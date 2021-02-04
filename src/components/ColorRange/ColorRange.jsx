import React, { Component } from 'react';

class ColorRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rgb: null,
            hex: '',
            initial: this.props.color
        }
    }
    convertHex = () => {
        const { color } = this.props
        const hex = color.replace('#', '');
        const R = parseInt(hex.substring(0, 2), 16),
            G = parseInt(hex.substring(2, 4), 16),
            B = parseInt(hex.substring(4, 6), 16)

        this.setState({
            rgb: {
                R,
                G,
                B
            },
            hex: color
        });
    }
    handleChange = (e, rgbType) => {
        const { rgb } = this.state;

        rgb[rgbType] = e.target.value;
        let r = Number(rgb['R']).toString(16),
            g = Number(rgb['G']).toString(16),
            b = Number(rgb['B']).toString(16)
        if (r.length === 1)
            r = "0" + r;
        if (g.length === 1)
            g = "0" + g;
        if (b.length === 1)
            b = "0" + b;
        const hex = `#${r}${g}${b}`
        this.props.onChange(hex);
    }
    componentWillMount() {
        this.convertHex();
    }
    componentDidUpdate() {
        if(this.props.color !== this.state.hex) {
            this.convertHex();
        }
    }
    renderRange = () => {
        const { rgb } = this.state;

        return Object.keys(rgb).map(rgbType => (
            <div key={rgbType} className="card-panel">
                {rgbType}
                <input width="100%" type="range" min='0' max='255' value={rgb[rgbType]} onChange={(e) => this.handleChange(e, rgbType)} />
            </div>
        ))
    }
    render() {
        return (
           <div>
                {this.renderRange()}
           </div>
        );
    }
}

export default ColorRange;