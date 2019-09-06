import React, { Component } from "react";
import { Breakpoint } from "react-socks";
import "./ResourceModal.css";

export default class ResourceModal extends Component {
  componentWillUnmount() {
    document.body.style.overflow = "unset";
    document.body.style.position = "initial";
  }

  render() {
    return (
      <div className="modal-frame">
        <div
          className="close-button"
          onClick={e => {
            this.props.handleClose(e);
          }}
        >
          <p className="close-button-text">close</p>
          <span className="close-button-symbol">&times;</span>
        </div>
        <h3 className="resourceTitle">{this.props.title}</h3>
        <embed className="pdf-document" src={this.props.src} />
        <div className="link-container">
          <Breakpoint tabletLandscape down>
            <a href={this.props.src} id="download-pdf-button" download>
              View full PDF
            </a>
          </Breakpoint>
          <Breakpoint xlarge up>
            <a href={this.props.src} id="download-pdf-button" download>
              Download
            </a>
          </Breakpoint>
        </div>
      </div>
    );
  }
}
