import React from 'react';
import './ResourceModal.css';
import { Breakpoint } from 'react-socks';

export default function ResourceModal(props) {
  return (
    <div className="modal-frame">
      <div
        className="close-button"
        onClick={e => {
          props.handleClose(e);
        }}
      >
        <p className="close-button-text"><span className="italic">close</span></p>
        <span className="close-button-symbol">&times;</span>
      </div>
      <h3 className="resourceTitle">
        {props.title}
      </h3>
      <div className="pdf-document-container">
        <embed className="pdf-document" src={props.src} />
      </div>
      {/* <div className="caption">
        {props.clickedImageName}
      </div> */}
      <div className="button-container">
        <Breakpoint small down>
          <a href={props.src} id="download-pdf-button" download>View full PDF</a>
        </Breakpoint>
        <Breakpoint medium up>
          <a href={props.src} id="download-pdf-button" download>Download</a>
        </Breakpoint>
      </div>
    </div>
  );
}
