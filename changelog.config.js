module.exports = {
  types: [
    { type: 'feat', section: 'New Features', hidden: false },
    { type: 'fix', section: 'Bug Fixes', hidden: false },
    { type: 'docs', section: 'Documentation', hidden: false },
    { type: 'style', section: 'Styling', hidden: false },
    { type: 'refactor', section: 'Code Refactoring', hidden: false },
    { type: 'perf', section: 'Performance Improvements', hidden: false },
    { type: 'test', section: 'Tests', hidden: false },
    { type: 'chore', section: 'Chores', hidden: false },
  ],
  commitPartial: `{{date format="MMMM DD, YYYY"}}`,
};
