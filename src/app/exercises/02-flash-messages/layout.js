import React from 'react';

import './styles.css';

import ToastProvider from "../../../components/ToastProvider";
import ToastShelf from "../../../components/ToastShelf";

function FlashMsgLayout({ children }) {
  return (
    <ToastProvider>
      <html lang="en">
        <body>
          {children}
          <ToastShelf />
        </body>
      </html>
    </ToastProvider>
  );
}

export default FlashMsgLayout;
