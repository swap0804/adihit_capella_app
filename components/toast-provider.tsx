"use client";

import { ToastContainer } from 'react-toastify';

export function ToastProvider() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={4500}
      closeOnClick
      pauseOnHover
      draggable
      hideProgressBar={false}
      newestOnTop
      theme="light"
    />
  );
}
