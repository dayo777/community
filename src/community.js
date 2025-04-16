/* modules/community/src/community.js */
import './community.css';

export function initializeCommunity(containerId) {
  const container = document.getElementById(containerId);

  fetch('./modules/community/src/community.html')
    .then(response => response.text())
    .then(html => {
      container.innerHTML = html;

      // Simulate adding more posts on a button click or scroll
      const postContainer = document.getElementById('post-container');
      const loadingIndicator = document.querySelector('.loading-indicator');

      if (loadingIndicator) {
        // Simulate removing the loading indicator after initial load
        setTimeout(() => {
          loadingIndicator.remove();
        }, 1500);
      }

      // Example: Adding a new post dynamically
      function addPost(username, content, imageUrl = null) {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
          <div class="user-info">
            <span class="username">${username}</span>
            <span class="timestamp">Just now</span>
          </div>
          <div class="post-content">
            <p>${content}</p>
            ${imageUrl ? `<img src="${imageUrl}" alt="User Shared Image">` : ''}
          </div>
          <div class="post-actions">
            <button class="like-button">❤️ Like</button>
            <button class="comment-button">💬 Comment</button>
          </div>
        `;
        postContainer.appendChild(newPost);

        // You'd typically add event listeners for the new buttons here
      }

      // Simulate a "New Post" button functionality
      // (You'd add this button in the HTML or elsewhere)
      // setTimeout(() => {
      //   addPost('New User', 'This is a dynamically added post!');
      // }, 3000);
    });
}