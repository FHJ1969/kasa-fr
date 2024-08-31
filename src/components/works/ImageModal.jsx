import React from 'react';
import './ImageModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ImageModal = ({ imageUrl, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <img src={imageUrl} alt="Work" />
                <button className="modal-close" onClick={onClose}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
