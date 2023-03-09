import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetailPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_BASE_URL = `https://www.googleapis.com/books`;
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`${API_BASE_URL}/v1/volumes/${bookId}`);
        setBook(result.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchBooks();
  }, [bookId]);

  return <div></div>;
};

export default BookDetailPage;
