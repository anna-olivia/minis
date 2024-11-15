import React, { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/Tasks.module.css';

const calculateDiscountedPrice = (price, discount) => {
  return price - (price * (discount / 100));
};

const Task2 = () => {
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const numPrice = parseFloat(price);
    const numDiscount = parseFloat(discount);

    if (isNaN(numPrice) || isNaN(numDiscount)) {
      alert('Bitte geben Sie gültige Zahlen ein.');
      return;
    }

    const discountedPrice = calculateDiscountedPrice(numPrice, numDiscount);
    setResult(discountedPrice.toFixed(2));
  }, [price, discount]);

  const handleReset = useCallback(() => {
    setResult(null);
    setPrice('');
    setDiscount('');
  }, []);

  return (
    <>
      <Outlet />
      <div className={classes.task}>
        <h2>Task2</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="price">Preis der Ware in €</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              aria-label="Preis der Ware"
              required
            />
          </div>
          <div>
            <label htmlFor="discount">Reduktion in %</label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              aria-label="Reduktion in Prozent"
              required
            />
          </div>
          <div>
            <button type="submit">Reduzieren!</button>
            <button type="button" onClick={handleReset}>Zurücksetzen</button>
          </div>
          {result !== null && (
            <h3>Ergebnis: {result} €</h3>
          )}
        </form>
      </div>
    </>
  );
};

export default Task2;
