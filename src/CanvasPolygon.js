import { html, css, LitElement } from 'lit';

export class CanvasPolygon extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0;
        color: var(--canvas-polygon-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      size: { type: Number },
      sides: { type: Number },
      lineWidth: { type: Number, attribute: "line-width" },
      bgColor: { type: String, attribute: "bg-color" },
      offsetRotation: { type: Number, attribute: "offset-rotation" },
    };
  }

  constructor() {
    super();
    this.size = 400;
    this.sides = 6;
    this.lineWidth = 1;
    this.bgColor = "transparent";
    this.offsetRotation = 0;

    this._offsetRotationOptions = [Math.PI / 6, Math.PI / 4, -Math.PI / 2];
    this._canvas = null;
    this.ctx = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.sides < 3) {
      throw new Error("The polygon must have at least 3 sides");
    }
    this.radio = this.size / 2; 
    this.width = this.size;
    this.height = this.size;
  }

  firstUpdated() {
    super.firstUpdated();
    if (this.offsetRotation === 0) {
      this.offsetRotation = this._offsetRotationOptions[this.sides - 3] || 0;
    }
    this._canvas = this.shadowRoot.querySelector("canvas");
    this._canvas.width = this.width;
    this._canvas.height = this.height;
    this.ctx = this._canvas.getContext("2d");
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = this.lineWidth;
    this.drawShape();
  }

  drawShape() {
    this.ctx.translate(this.width/2, this.height/2);

    for (let i = 0; i < this.sides; i += 1) {
      const rotation = ((Math.PI * 2) / this.sides) * i + this.offsetRotation;
      if (i === 0) {
        this.ctx.moveTo(this.radio * Math.cos(rotation), this.radio * Math.sin(rotation));
      } else {
        this.ctx.lineTo(this.radio * Math.cos(rotation), this.radio * Math.sin(rotation));
      }
    }
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fill();

    this.ctx.resetTransform();
  }

  render() {
    return html`
      <canvas></canvas>
    `;
  }
}
