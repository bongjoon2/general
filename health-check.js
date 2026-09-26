function checkProjectHealth(project) {
  const checks = {
    readme: Boolean(project.readme),
    license: Boolean(project.license),
    issues: Boolean(project.issuesEnabled),
    recentActivity: Number(project.recentCommits || 0) > 0
  };

  const passed = Object.values(checks).filter(Boolean).length;
  const total = Object.keys(checks).length;

  return {
    score: Math.round((passed / total) * 100),
    checks
  };
}

const example = checkProjectHealth({
  readme: true,
  license: true,
  issuesEnabled: true,
  recentCommits: 3
});

console.log(example);