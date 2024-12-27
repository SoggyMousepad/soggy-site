import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'main',
  repo: 'https://github.com/SoggyMousepad/soggy-site.git',
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
  } else {
    console.log('Deployment successful!');
  }
});
