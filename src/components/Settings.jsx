import ReactModal from 'react-modal';
import { useState } from "react";
import Input from "./Input";
import '../styles/settings.scss'

export default function Settings() {
	const [modalIsOpen, setIsOpen] = useState(false);


	const handleOpenModal = () => {
		setIsOpen(!modalIsOpen);
	}

	return (
		<>
			<button onClick={handleOpenModal}>Settings</button>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Example Modal"
                className="modal"
            >
                <div className="modal-content">
                    <h2>Settings</h2>
					<div className="settings-container">
						<div className='settings-item'>
							<h3>Platform 1</h3>
							<Input setIsOpen={setIsOpen}/>
						</div>
						<div className='settings-item'>
                            <h3>Platform 2</h3>
                            <Input setIsOpen={setIsOpen}/>
                        </div>
						<div className='settings-item'>
                            <h3>Platform 3</h3>
                            <Input setIsOpen={setIsOpen}/>
                        </div>
						<div className='settings-item'>
                            <h3>Platform 4</h3>
                            <Input setIsOpen={setIsOpen}/>
                        </div>
					</div>
					<button onClick={handleOpenModal}>Close</button>
                </div>
            </ReactModal>
		</>
	)
}