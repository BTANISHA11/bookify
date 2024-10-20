import React from 'react';

const NotificationsComponent = () => {
  const notifications = [
    { id: 1, message: "You have 2 new trades!" },
    { id: 2, message: "Your wishlist book is now available!" },
  ];

  return (
    <div className="notifications-container">
      {notifications.length > 0 ? (
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              {notification.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default NotificationsComponent;
