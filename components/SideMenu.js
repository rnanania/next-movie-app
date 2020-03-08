import React from "react";
import Modal from "./Modal";
import MovieForm from "./MovieForm";

const SideMenu = props => {
  const { categories, changeCategory, selectedCategory } = props;
  let modalRef = null;

  const handleCloseModal = () => {
    modalRef.closeModal();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#movieModal"
      >
        Create Movie
      </button>
      <Modal ref={e => (modalRef = e)}>
        <MovieForm {...props} handleCloseModal={handleCloseModal} />
      </Modal>
      <h1 className="my-4">Movies</h1>
      <div className="list-group">
        {categories.map(cat => {
          const selectedClass = cat.name === selectedCategory ? "active" : "";
          return (
            <a
              onClick={e => {
                e.preventDefault();
                changeCategory(cat.name);
              }}
              href="#"
              className={`list-group-item ${selectedClass}`}
              key={cat.id}
            >
              {cat.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;
