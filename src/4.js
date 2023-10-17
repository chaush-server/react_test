import React, { useState } from 'react';
import ConfirmationDialog from './confirm';
const ShapeList = ({ shapes, removeShape }) => {
  const [selectedShapeIndex, setSelectedShapeIndex] = useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const openConfirmationDialog = (index) => {
    setSelectedShapeIndex(index);
    setConfirmationDialogOpen(true);
  };

  const closeConfirmationDialog = () => {
    setSelectedShapeIndex(null);
    setConfirmationDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    if (selectedShapeIndex !== null) {
      removeShape(selectedShapeIndex);
      closeConfirmationDialog();
    }
  };

  return (
    <div>
      <ul>
        {shapes.map((shape, index) => (
          <li key={index}>
            {shape}
            <button onClick={() => openConfirmationDialog(index)}>Удалить</button>
          </li>
        ))}
      </ul>
      {isConfirmationDialogOpen?(
        <ConfirmationDialog onConfirm={handleConfirmDelete} onCancel={closeConfirmationDialog} />
      ):null}
    </div>
  );
};

  const AddShapeForm = ({ addShape }) => {
    const [shapeType, setShapeType] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (shapeType.trim() !== '') {
        addShape(shapeType);
        setShapeType('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите тип фигуры"
          value={shapeType}
          onChange={(e) => setShapeType(e.target.value)}
        />
        <button type="submit">Добавить фигуру</button>
      </form>
    );
  };

  const App = () => {
    const [shapes, setShapes] = useState([]);
  
    const addShape = (shapeType) => {
      setShapes([...shapes, shapeType]);
    };
  
    const removeShape = (index) => {
      const newShapes = [...shapes];
      newShapes.splice(index, 1);
      setShapes(newShapes);
    };
  
    return (
      <div>
        <AddShapeForm addShape={addShape} />
        <ShapeList shapes={shapes} removeShape={removeShape} />
      </div>
    );
  };
  
  export default App;