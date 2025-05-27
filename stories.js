// stories.js
const storiesList = document.getElementById('stories-list');
const postStoryBtn = document.getElementById('post-story-btn');
const storyInput = document.getElementById('story-input');

let stories = [];

if (postStoryBtn) {
  postStoryBtn.onclick = () => {
    const text = storyInput.value.trim();
    if (text) {
      stories.push({ text, id: Date.now() });
      renderStories();
      storyInput.value = '';
    }
  };
}

function renderStories() {
  if (!storiesList) return;
  storiesList.innerHTML = stories.map(story => `<div class="story">${story.text}</div>`).join('');
}

renderStories();
