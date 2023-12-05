import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ title, children, actionsPannel, handleCloseDialog, size, color }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Fondo del diálogo */}
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Contenido del diálogo */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-${size}`}>
          <div className={`bg-${color} px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse`}>
            <button
              type="button"
              className="text-white font-bold text-lg focus:outline-none"
              onClick={handleCloseDialog}
            >
              X
            </button>
          </div>
          <div className="px-4 py-4 sm:p-6">
            {/* Título del cuadro de diálogo */}
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
            </div>

            {/* Contenido del cuadro de diálogo */}
            <div className="mt-5">{children}</div>

            {/* Acciones del cuadro de diálogo */}
            <div className="mt-5 sm:mt-6">{actionsPannel}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  actionsPannel: PropTypes.node.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Dialog;
    