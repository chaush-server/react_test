import React from 'react';
import './App.css'
const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div class="backdrop">
      <div class='modal'>
      <p>Вы действительно хотите удалить фигуру?</p>
      <button onClick={onConfirm}>Да</button>
      <button onClick={onCancel}>Отмена</button>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
