import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group'; //1. Импортируем компонент Transition
import './App.css';

const Modal = (props) => {

    const duration = 300; //2. Устанавливаем длительность анимации

    return (
        <CSSTransition //3. Оборачиваем в CSSTransition все, что будем анимировать
            in={props.show} //4. Указываем текущее состояние элемента анимации
            timeout={duration} //5. Устанавливаем длительность анимации
            onEnter={() => props.setShowTrigger(false)} //6. Устанавливаем что происходит, когда анимация началась
            onExited={() => props.setShowTrigger(true)} //7. Устанавливаем что происходит, когда анимация закончилась
            classNames="modal" //8. Задаем базовый класс для анимации
            mountOnEnter //9. Компопнент/элемент внутри CSSTransition будет создаваться только тогда, когда мы его вызовен, т.е. изначально его не будет в DOM-дереве
            unmountOnExit //10. Компопнент/элемент внутри CSSTransition будет исчезать тогда, когда мы его уничтожим/закроем, т.е. это выходит из анимации, чтобы элемент снова не появился в DOM
            >
                <div className="modal mt-5 d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Typical modal window</h5>
                            <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);

    return (
        <Container>
            <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger} />
            {showTrigger ?
            <button 
                type="button" 
                className="btn btn-warning mt-5"
                onClick={() => setShowModal(true)}>Open Modal</button> :
                null}
        </Container>
    );
}

export default App;
