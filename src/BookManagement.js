import React, { useState } from 'react';
import './App.css';

const BookManagement = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    bookName: '',
    bookType: '',
    borrowDate: '',
    returnDate: ''
  });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBook = () => {
    if (editIndex === -1) {
      setBooks([...books, formData]);
    } else {
      const updatedBooks = [...books];
      updatedBooks[editIndex] = formData;
      setBooks(updatedBooks);
      setEditIndex(-1);
    }
    setFormData({
      bookName: '',
      bookType: '',
      borrowDate: '',
      returnDate: ''
    });
  };

  const handleEditBook = (index) => {
    setFormData(books[index]);
    setEditIndex(index);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="book-management">
      <h2>Book Management System</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Book Name"
          name="bookName"
          value={formData.bookName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Book Type"
          name="bookType"
          value={formData.bookType}
          onChange={handleInputChange}
        />
        <h4>วันที่ยืม</h4>
        <input
          type="date"
          placeholder="Borrow Date"
          name="borrowDate"
          value={formData.borrowDate}
          onChange={handleInputChange}
        />
        <h4>วันที่คืน</h4>
        <input
          type="date"
          placeholder="Return Date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddBook}>{editIndex === -1 ? 'Add Book' : 'Update Book'}</button>
      </div>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <div>
              <strong>{book.bookName}</strong> - {book.bookType}<br />
              วันที่ยืม: {book.borrowDate}<br />
              วันที่คืน: {book.returnDate}
            </div>
            <div>
              <button className="edit-btn" onClick={() => handleEditBook(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteBook(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;