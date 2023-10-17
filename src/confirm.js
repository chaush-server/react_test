import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirmation-dialog">
      <p>Вы действительно хотите удалить фигуру?</p>
      <button onClick={onConfirm}>Да</button>
      <button onClick={onCancel}>Отмена</button>
    </div>
  );
};

export default ConfirmationDialog;
