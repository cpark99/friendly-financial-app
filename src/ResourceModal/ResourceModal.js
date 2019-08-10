import React from 'react';
import './ResourceModal.css';

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
      <embed className="pdf-document" src={props.src} />
      {/* <div className="caption">
        {props.clickedImageName}
      </div> */}
      <div className="button-container">
        <a href={props.src} id="download-pdf-button" download>Download</a>
      </div>
    </div>
  );
}
