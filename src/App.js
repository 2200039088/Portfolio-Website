import React from 'react';
import Student from './Student';

const App = () => {
 /*   useEffect(() => {
    Function to handle context menu event (right-click)
    const handleContextMenu = (event) => {
      event.preventDefault(); // Prevent the default right-click behavior
    };

    // Add the event listener to disable right-click
    document.addEventListener('contextmenu', handleContextMenu);

    // Function to show an alert on smaller screens
    if (window.innerWidth < 768) {
      alert('This site is best viewed on a PC for the optimal experience.');
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []); */

  return (
    <Student />
  );
}

export default App;